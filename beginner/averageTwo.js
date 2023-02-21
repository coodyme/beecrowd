using System;

namespace Beginner
{
    public static class AverageTwo
    {
        public static void Init()
        {
            double a = double.Parse(Console.ReadLine());
            double b = double.Parse(Console.ReadLine());
            double c = double.Parse(Console.ReadLine());

            double media = ((a * 2) + (b * 3) + (c * 5)) / 10;

            Console.WriteLine("MEDIA = " + string.Format("{0:0.0}", media));
        }
    }
}