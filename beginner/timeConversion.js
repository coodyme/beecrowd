using System;

namespace Beginner
{
    public static class TimeConversion
    {
        public static void Init()
        {
            int h, m, s;

            int n = int.Parse(Console.ReadLine());

            h = n / 3600;
            n = n % 3600;
            m = n / 60;
            s = n % 60;
            Console.WriteLine(h + ":" + m + ":" + s);
        }
    }
}