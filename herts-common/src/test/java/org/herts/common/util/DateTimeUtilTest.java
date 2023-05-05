package org.herts.common.util;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class DateTimeUtilTest {

    @Test
    public void getCurrentTimeMilliSec() throws InterruptedException {
        var start = DateTimeUtil.getCurrentTimeMilliSec();
        Thread.sleep(1000);
        var end = DateTimeUtil.getCurrentTimeMilliSec();
        assertTrue((end-start) > 800);
    }
}
