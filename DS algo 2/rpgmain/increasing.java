package rpgmain;

import java.util.Scanner;

/**
 * increasing
 */
public class increasing {

    public static void main(String[] arg) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        pdi(n);
    }

    public static void pdi(int n) {
        if(n == 1){
            return;
        }
        System.out.println(n);
        pdi( n-1);
        System.out.println(n);
    }
}