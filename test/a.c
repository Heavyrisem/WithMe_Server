#include <stdio.h>

int main() {
    int r = 0;
    for (int a = 32; a > 0; a >>= 1) 
        r = r + a;
    printf("%d", r);
}