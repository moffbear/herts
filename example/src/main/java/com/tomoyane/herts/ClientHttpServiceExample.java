package com.tomoyane.herts;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.tomoyane.herts.hertscommon.logger.HertsLogger;
import com.tomoyane.herts.hertscommon.serializer.HertsSerializeType;
import com.tomoyane.herts.hertscommon.serializer.HertsSerializer;
import com.tomoyane.herts.httpclient.HertsHttpClientBase;
import com.tomoyane.herts.httpclient.HertsHttpClient;

import java.util.logging.Logger;

public class ClientHttpServiceExample {
    private static final Logger logger = HertsLogger.getLogger(ClientHttpServiceExample.class.getSimpleName());
    private static final HertsSerializer serializer = new HertsSerializer(HertsSerializeType.Json);

    public static void client() throws JsonProcessingException {
        HertsHttpClientBase client = HertsHttpClient
                .builder("localhost")
                .hertsImplementationService(new HttpServiceImpl())
                .secure(false)
                .port(8080)
                .build();

        var service = client.createHertHttpCoreInterface(HttpService.class);
        for (int i = 0; i < 100; i++) {
            var res = service.httpTest01("ID", "VALUE bu client");
            logger.info(serializer.serializeAsStr(res));
        }
    }
}
