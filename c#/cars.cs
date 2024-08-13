using System;

static class AssemblyLine
{
    public static double SuccessRate(int speed)
    {
       switch(speed){
        case 0:
            return 0;
            break;
        case 1:
        case 2:
        case 3:
        case 4:
            return 100;
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            return 90;
            break;
        case 9:
            return 88;
            break;
        case 10:
            return 77;
            break;
        
       }
    }
    
    public static double ProductionRatePerHour(int speed)
    {
        throw new NotImplementedException("Please implement the (static) AssemblyLine.ProductionRatePerHour() method");
    }

    public static int WorkingItemsPerMinute(int speed)
    {
        throw new NotImplementedException("Please implement the (static) AssemblyLine.WorkingItemsPerMinute() method");
    }
}
