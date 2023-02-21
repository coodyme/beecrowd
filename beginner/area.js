using System;

namespace Beginner
{
    public static class Area
    {
        public static void Init()
        {
            string[] line1 = Console.ReadLine().Split();

            double A = double.Parse(line1[0]);
            double B = double.Parse(line1[1]);
            double C = double.Parse(line1[2]);

            double areaTri = (A * C) / 2;
            double areaCirc = 3.14159 * (C * C);
            double areaTrap = (A + B) * C / 2;
            double areaQuad = B * B;
            double areaRet = A * B;

            Console.WriteLine("TRIANGULO: " + string.Format("{0:0.000}", areaTri));
            Console.WriteLine("CIRCULO: " + string.Format("{0:0.000}", areaCirc));
            Console.WriteLine("TRAPEZIO: " + string.Format("{0:0.000}", areaTrap));
            Console.WriteLine("QUADRADO: " + string.Format("{0:0.000}", areaQuad));
            Console.WriteLine("RETANGULO: " + string.Format("{0:0.000}", areaRet));
        }
    }
}