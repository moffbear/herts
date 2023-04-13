package com.tomoyane.herts.hertshttp.engine;

import java.lang.reflect.Method;

public class HertsHttpMethod {
    private Method method;
    private Class<?>[] parameterTypes;

    public HertsHttpMethod() {}

    public HertsHttpMethod(Method method, Class<?>[] parameterTypes) {
        this.method = method;
        this.parameterTypes = parameterTypes;
    }

    public Method getMethod() {
        return method;
    }

    public Class<?>[] getParameterTypes() {
        return parameterTypes;
    }
}
