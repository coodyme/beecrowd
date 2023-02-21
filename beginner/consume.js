using System;

namespace Beginner
{
    public static class Consume
    {
        public static void Init()
        {
            double x = double.Parse(Console.ReadLine());
            double y = double.Parse(Console.ReadLine());

            double media = x / y;

            Console.WriteLine(string.Format("{0:0.000}", media) + " km/l");
        }
    }
}