using System;

namespace Beginner
{
    public static class SimpleSum
    {
        public static void Init()
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());
            int soma = a + b;
            Console.WriteLine("SOMA = " + soma);
        }
    }
}