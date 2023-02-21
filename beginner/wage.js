using System;

namespace Beginner
{
    public static class Wage
    {
        public static void Init()
        {
            int n = int.Parse(Console.ReadLine());
            int horas = int.Parse(Console.ReadLine());
            float valor = float.Parse(Console.ReadLine());
            float salario = valor * horas;
            Console.WriteLine("NUMBER = " + n);
            Console.WriteLine("SALARY = " + "U$ " + string.Format("{0:0.00}", salario));
        }
    }
}