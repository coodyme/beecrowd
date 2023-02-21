using System;

namespace Beginner
{
    public static class CircleArea
    {
        public static void Init()
        {
            double pi = 3.14159;

            double raio = double.Parse(Console.ReadLine());

            double area = (Math.Pow(raio, 2)) * pi;

            Console.WriteLine("A=" + string.Format("{0:0.0000}", area));
        }
    }
}