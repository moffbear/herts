package org.hertsstack.e2etest.gateway;

import org.hertsstack.core.context.HertsMetricsSetting;
import org.hertsstack.core.logger.Logging;
import org.hertsstack.e2etest.unary_rpc.UnaryRpcService01;
import org.hertsstack.e2etest.unary_rpc.UnaryRpcService02;
import org.hertstack.gateway.HertsGatewayBuilder;
import org.hertstack.gateway.HertsGatewayEngine;

public class GwServer {
    private static final java.util.logging.Logger logger = Logging.getLogger(GwServer.class.getSimpleName());

    public static void run() {
        HertsMetricsSetting metrics = HertsMetricsSetting.builder().isRpsEnabled(true).isLatencyEnabled(true).build();

        HertsGatewayEngine engine = HertsGatewayBuilder.builder()
                .gatewayPort(9876)
                .rpcHost("localhost")
                .rpcPort(9999)
                .registerHertsRpcService(UnaryRpcService01.class, null)
                .registerHertsRpcService(UnaryRpcService02.class, null)
                .enableMetrics(metrics)
                .build();

        engine.start();
    }
}
