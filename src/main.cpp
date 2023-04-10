#include "stepper.h"
#include "service.h"
void setup()
{
    stepper_init();
    service_init();
}
void loop()
{
    service_run();
}