using System;

static class LogLine
{
    public static string Message(string logLine)
    {
        string [] result = logLine.Split(":");
        
       
        return result[1].Trim();
    }

    public static string LogLevel(string logLine)
    {
        throw new NotImplementedException("Please implement the (static) LogLine.LogLevel() method");
    }

    public static string Reformat(string logLine)
    {
        throw new NotImplementedException("Please implement the (static) LogLine.Reformat() method");
    }
}
