package java17.com.tomoyane.herts.example.server;

import com.tomoyane.herts.GrpcServerInterceptor;
import com.tomoyane.herts.UnaryRpcServiceImpl01;
import com.tomoyane.herts.UnaryRpcServiceImpl02;
import com.tomoyane.herts.hertscore.engine.HertsEngineBuilderImpl;

public class Main {
    public static void main(String[] args) {
        var service01 = new UnaryRpcServiceImpl01();
        var service02 = new UnaryRpcServiceImpl02();
//        var service = new BidirectionalStreamingRpcServiceImpl();
        //var service = new ServerStreamingRpcServiceImpl();
//        var service = new ClientStreamingRpcServiceImpl();
        var engine = HertsEngineBuilderImpl.Builder
                .create()
                .addService(service01, new GrpcServerInterceptor())
                .addService(service02, null)
                .build();
        engine.start();
    }
}