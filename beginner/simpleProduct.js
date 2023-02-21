using System;

namespace Beginner
{
    public static class SimpleProduct
    {
        public static void Init()
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());
            int prod = a * b;
            Console.WriteLine("PROD = " + prod);
        }
    }
}