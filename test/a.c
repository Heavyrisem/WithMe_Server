#include <stdio.h>

int main() {
    int a = 0;
    char str[5];
    str[0] = 'K';
    str[1] = 'O';
    str[2] = 'R';
    str[3] = 'E';
    str[4] = 'A';

    while (a < 5)
    {
        /* code */
        printf("%c", str[a]);
        a++;
    }
    
}