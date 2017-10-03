int photoresistor = A0;
int power = A5; // we use A5 for consistent power
int analogvalue;

void setup() {
    pinMode(photoresistor,INPUT);
    pinMode(power,OUTPUT);
    digitalWrite(power,HIGH);
    Particle.variable("analogvalue", &analogvalue, INT);
}

void loop() {
    analogvalue = analogRead(photoresistor);
    delay(100);
}