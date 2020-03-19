#!/usr/bin/env python
import RPi.GPIO as GPIO
import time


TRIG = 17
ECHO = 18

GPIO.setmode(GPIO.BCM)
GPIO.setup(25,GPIO.OUT)

GPIO.setup(TRIG, GPIO.OUT)
GPIO.setup(ECHO, GPIO.IN)

pwm = GPIO.PWM(25,50)
pos_center = 7
pwm.start(pos_center)


def distance():
        GPIO.output(TRIG, 0)
        time.sleep(0.000002)

        GPIO.output(TRIG, 1)
        time.sleep(0.00001)
        GPIO.output(TRIG, 0)

        while GPIO.input(ECHO) == 0:
                a = 0
        time1 = time.time()
        while GPIO.input(ECHO) == 1:
                a = 1
        time2 = time.time()

        during = time2 - time1
        return during * 340 / 2 * 100

def loop():
        current = 20
        count = 0
        while True:
                dis = distance()
                if (dis < 48.5  and current - dis > -10 and current - dis < 10):
                        if(dis>23):
                                c=6
                                pwm.ChangeDutyCycle(c)
                                time.sleep(0.2)
                                pwm.ChangeDutyCycle(7)
                                time.sleep(0.09)
                        elif(dis<7):
                                pwm.ChangeDutyCycle(8)
                                time.sleep(0.2)
                        elif(dis<18):
                                c=8
                                pwm.ChangeDutyCycle(c)
                                time.sleep(0.2)
                                pwm.ChangeDutyCycle(6)
                                time.sleep(0.2)
                                pwm.ChangeDutyCycle(7)
                                time.sleep(0.15)
                        else:
                                c=7
                                pwm.ChangeDutyCycle(c)
                        print(dis,'cm')
                        current = dis
                        count = 0
                        time.sleep(0.05)
                        dis = distance()
                        
                elif(count > 4):
                        current = dis
                                        else:
                        count = count + 1
                        time.sleep(0.06)
def destroy():
        pwm.stop()
        GPIO.cleanup()

if __name__ == "__main__":
        try:
                loop()
        except KeyboardInterrupt:
                destroy()


