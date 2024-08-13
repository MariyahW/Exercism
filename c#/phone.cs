using System;

public static class PhoneNumber
{
    public static (bool IsNewYork, bool IsFake, string LocalNumber) Analyze(string phoneNumber)
    {
        string[] num = phoneNumber.Split("-");
        bool IsNewYork = string.Equals(num[0], "212");
        bool IsFake = string.Equals(num[1], "555");
        string LocalNumber = num[2];
        // foreach (var item in num)
        // {
        //     Console.WriteLine(item);
        // }



        return (IsNewYork, IsFake, LocalNumber);
    }

    public static bool IsFake((bool IsNewYork, bool IsFake, string LocalNumber) phoneNumberInfo)
    {
        return phoneNumberInfo.IsFake;
    }
}
