package com.tomoyane.herts.hertscommon.mapping;

import com.google.common.io.ByteStreams;

import com.tomoyane.herts.hertscommon.logger.HertsLogger;
import io.grpc.MethodDescriptor;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.logging.Logger;

public class HertsMarshaller implements MethodDescriptor.Marshaller<byte[]> {
    private static final Logger logger = HertsLogger.getLogger(HertsMarshaller.class.getSimpleName());

    public HertsMarshaller() {
    }

    @Override
    public InputStream stream(byte[] value) {
        if (value == null) {
            return null;
        }
        return new ByteArrayInputStream(value);
    }

    @Override
    public byte[] parse(InputStream stream) {
        if (stream == null) {
            return null;
        }
        try {
            return ByteStreams.toByteArray(stream);
        } catch (IOException ex) {
            logger.warning("Failed to parse message. " + ex.getMessage());
            throw new RuntimeException(ex);
        }
    }
}
