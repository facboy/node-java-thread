package org.facboy.nodejava;

/**
 * @author Christopher Ng
 */
public class Fun {
    public void doSomething(final Doer doer) {
        Thread t = new Thread(new Runnable() {
            @Override
            public void run() {
                doer.doIt("fun");
            }
        });
        t.start();
    }
}
