int ledPin = D7;

void setup() {
    pinMode(ledPin, OUTPUT);
    Particle.function("on", ledOn);
    Particle.function("off", ledOff);
    Particle.function("set", ledSet);
}

void loop() {
}

int ledOn(String command) {
    digitalWrite(ledPin, HIGH);
    return 0;
}

int ledOff(String command) {
    digitalWrite(ledPin, LOW);
    return 0;
}

int ledSet(String command) {
    if( command == "on" )
        digitalWrite(ledPin, HIGH);
    else if( command == "off" )
        digitalWrite(ledPin, LOW);
    return 0;
}
