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
        // string [] sep = {"[","]" };
          string [] result = logLine.Split(new char []{'[',']'});
        return result[1].ToLower();
    }

    public static string Reformat(string logLine)
    {
        throw new NotImplementedException("Please implement the (static) LogLine.Reformat() method");
    }
}
