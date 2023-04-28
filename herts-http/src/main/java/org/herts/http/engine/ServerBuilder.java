package org.herts.http.engine;

import org.eclipse.jetty.util.ssl.SslContextFactory;
import org.herts.common.context.HertsMetricsSetting;
import org.herts.common.exception.HertsHttpBuildException;
import org.herts.common.service.HertsService;
import org.herts.http.HertsHttpInterceptor;
import org.herts.http.validator.HertsHttpValidator;

import java.util.ArrayList;
import java.util.List;

public class ServerBuilder implements HertsHttpEngineBuilder {
    private final List<HertsService> hertsRpcServices = new ArrayList<>();
    private HertsHttpInterceptor interceptor;
    private HertsMetricsSetting metricsSetting;
    private SslContextFactory sslContextFactory;
    private int port = 8080;

    public ServerBuilder() {
    }

    @Override
    public HertsHttpEngineBuilder setInterceptor(HertsHttpInterceptor interceptor) {
        this.interceptor = interceptor;
        return this;
    }

    @Override
    public HertsHttpEngineBuilder addImplementationService(HertsService hertsRpcService) {
        this.hertsRpcServices.add(hertsRpcService);
        return this;
    }

    @Override
    public HertsHttpEngineBuilder setMetricsSetting(HertsMetricsSetting metricsSetting) {
        this.metricsSetting = metricsSetting;
        return this;
    }

    @Override
    public HertsHttpEngineBuilder setPort(int port) {
        this.port = port;
        return this;
    }

    @Override
    public HertsHttpEngineBuilder setSsl(SslContextFactory sslContextFactory, int port) {
        this.sslContextFactory = sslContextFactory;
        this.port = port;
        return this;
    }

    @Override
    public HertsHttpEngine build() {
        if (this.hertsRpcServices.size() == 0) {
            throw new HertsHttpBuildException("Please register HertsCoreService");
        }
        if (!HertsHttpValidator.isAllHttpTypeByService(this.hertsRpcServices)) {
            throw new HertsHttpBuildException("Please register Http HertcoreService");
        }

        var validateMsg = HertsHttpValidator.validateRegisteredServices(this.hertsRpcServices);
        if (!validateMsg.isEmpty()) {
            throw new HertsHttpBuildException(validateMsg);
        }
        return new HertsHttpServer(this);
    }

    @Override
    public List<HertsService> getHertsRpcServices() {
        return hertsRpcServices;
    }

    @Override
    public HertsHttpInterceptor getInterceptor() {
        return interceptor;
    }

    @Override
    public HertsMetricsSetting getMetricsSetting() {
        return metricsSetting;
    }

    @Override
    public SslContextFactory getSslContextFactory() {
        return sslContextFactory;
    }

    @Override
    public int getPort() {
        return port;
    }
}
