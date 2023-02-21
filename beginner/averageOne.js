using System;

namespace Beginner
{
    public static class AverageOne
    {
        public static void Init()
        {
            double a = double.Parse(Console.ReadLine());
            double b = double.Parse(Console.ReadLine());
            double media = ((a * 3.5f) + (b * 7.5f)) / 11;

            Console.WriteLine("MEDIA = " + string.Format("{0:0.00000}", media));
        }
    }
}