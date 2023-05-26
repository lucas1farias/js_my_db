

def main():
  while True:
    try:
        x_fiddle, y_fiddle, x_enemy, y_enemy, vel_enemy, radius_cast, radius_flight = map(float, input().split())
        part_a = x_fiddle - x_enemy
        part_b = y_fiddle - y_enemy
        distance_outset = ((part_a ** 2)) + (part_b ** 2) ** 0.5
        casting_time = 1.5
        distance_outcome = distance_outset + (vel_enemy * casting_time)
        max_reach = radius_cast + radius_flight
        if (distance_outcome <= max_reach):
            print('Y')
        else:
            print('N')
    except EOFError:
      break

main()

#include<stdio.h>
#include<string.h>

int main()
{
    int i,n,l,j,led;
    char num[102];
    scanf("%d", &n);
    for(i = 0;i < n;i++){
        led = 0;
        scanf("%s", &num);
        l = strlen(num);
        for(j = 0;j < l;j++){
            if(num[j] == '2' || num[j] == '3' || num[j] == '5')led += 5;
            else if(num[j] == '0' || num[j] == '9' || num[j] == '6')led += 6;
            else if(num[j] == '4')led += 4
            else if(num[j] == '7')led += 3;
            else if(num[j] == '8')led += 7;
        }
        printf("%d leds\n",led);
    }
    return 0
}