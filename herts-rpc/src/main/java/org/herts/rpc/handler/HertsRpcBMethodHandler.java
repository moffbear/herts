package org.herts.rpc.handler;

import org.herts.common.exception.HertsInstanceException;
import org.herts.common.exception.HertsMessageException;
import org.herts.common.exception.HertsServiceNotFoundException;
import org.herts.common.context.HertsMethod;
import org.herts.common.serializer.HertsSerializer;

import io.grpc.stub.StreamObserver;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class HertsRpcBMethodHandler<Req, Resp> implements
        io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
        io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
        io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
        io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {

    private final Object coreObject;
    private final Object[] requests;
    private final Method reflectMethod;
    private final HertsMethod hertsMethod;
    private final HertsRpcCaller hertsRpcCaller;

    public HertsRpcBMethodHandler(HertsMethod hertsMethod) {
        this.hertsMethod = hertsMethod;
        this.requests = new Object[this.hertsMethod.getParameters().length];

        String serviceName = hertsMethod.getCoreImplServiceName();
        Class<?> coreClass;
        try {
            coreClass = Class.forName(serviceName);
        } catch (ClassNotFoundException ex) {
            throw new HertsServiceNotFoundException("Unknown Herts core class. " + ex.getMessage());
        }

        try {
            this.coreObject = coreClass.newInstance();
        } catch (InstantiationException | IllegalAccessException e) {
            throw new HertsInstanceException(e);
        }

        Method method;
        try {
            method = coreClass.getMethod(hertsMethod.getMethodName(), hertsMethod.getParameters());
        } catch (NoSuchMethodException ex) {
            throw new HertsInstanceException(ex);
        }

        this.reflectMethod = method;
        HertsSerializer serializer = new HertsSerializer();
        this.hertsRpcCaller = new HertsRpcSimpleCaller(this.reflectMethod, serializer, coreObject, requests);
    }

    @Override
    public StreamObserver<Req> invoke(StreamObserver<Resp> responseObserver) {
        try {
            var response = this.hertsRpcCaller.invokeStreaming(this.coreObject, responseObserver);
            return (StreamObserver<Req>) response;
        } catch (IllegalAccessException | InvocationTargetException ex) {
            throw new HertsMessageException(ex);
        }
    }

    @Override
    public void invoke(Req request, StreamObserver<Resp> responseObserver) {
        throw new AssertionError();
    }
}