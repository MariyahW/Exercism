using System;

public static class Leap
{
    public static bool IsLeapYear(int year)
    {
        bool leap = false;
        if (year % 4 == 0)
        {
            leap = true;
            if (year % 100 == 0 && year % 400 != 0)
            {
                leap = false;
            }
        }
        return leap;
    }
}