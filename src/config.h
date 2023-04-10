#pragma once
#define BAUD_RATE               115200

#define RX1_PIN                      4
#define TX1_PIN                      5
#define EN_PIN                       6
#define STEP_PIN                     7
#define DIR_PIN                     10
#define LED_PIN                      9


#define MICROSTEPS               256.0
#define GEAR_RATIO                  34

enum STEPPER_MODE
{
    SPEED_MODE = 1,
    DISTANCE_MODE,
};