using System;

namespace Beginner
{
    public static class Sphere
    {
        public static void Init()
        {
            double pi = 3.14159;

            double raio = double.Parse(Console.ReadLine());

            double volumeEsfera = (4 * pi * (Math.Pow(raio, 3))) / 3;
            Console.WriteLine("VOLUME = " + string.Format("{0:0.000}", volumeEsfera));
        }
    }
}