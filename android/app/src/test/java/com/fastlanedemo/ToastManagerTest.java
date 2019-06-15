package com.fastlanedemo;

import org.junit.Test;

import static org.junit.Assert.*;

public class ToastManagerTest {

    @Test
    public void getName() {
        ToastManager toastManager = new ToastManager(null);
        assertEquals("ToastManager", toastManager.getName());
    }
}