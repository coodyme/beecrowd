using System;

namespace Beginner
{
    public static class Difference
    {
        public static void Init()
        {
            double a = double.Parse(Console.ReadLine());
            double b = double.Parse(Console.ReadLine());
            double c = double.Parse(Console.ReadLine());
            double d = double.Parse(Console.ReadLine());

            double dif = ((a * b) - (c * d));

            Console.WriteLine("DIFERENCA = " + dif);
        }
    }
}