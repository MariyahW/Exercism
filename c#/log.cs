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
        string result = $"{LogLine.Message(logLine)} ({LogLine.LogLevel(logLine)})";
        return result;
    }
}
