using System;

static class AssemblyLine
{
    public static double SuccessRate(int speed)
    {
        switch (speed)
        {
            case 0:
                return 0;
                break;
            case 1:
            case 2:
            case 3:
            case 4:
                return 1.00;
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                return .90;
                break;
            case 9:
                return .80;
                break;
            case 10:
                return .77;
                break;
            default:
                return .77;
                break;

        }
    }

    public static double ProductionRatePerHour(int speed)
    {
        return ((speed*221)*SuccessRate(speed));
    }

    public static int WorkingItemsPerMinute(int speed)
    {
       return ((int)ProductionRatePerHour(speed)/60);
    }
}
