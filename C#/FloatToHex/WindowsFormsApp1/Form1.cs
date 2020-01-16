using System;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void textbox1_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Enter)
            {
                button1.PerformClick();
            }

        }

        private void button1_Click(object sender, EventArgs e)
        {
            string floatv1 = textBox1.Text;

            if (floatv1 == "")
            {
                MessageBox.Show("부동소수점을 입력해주세요.");
                return;
            }

            float f = float.Parse(floatv1);


            uint l = BitConverter.ToUInt32(BitConverter.GetBytes(f), 0);
            float r = BitConverter.ToSingle(BitConverter.GetBytes(l), 0);
            String result = String.Format("{1:X}", f, l, r);

            string Hex1 = result.Substring(6, 2);
            string Hex2 = result.Substring(4, 2);
            string Hex3 = result.Substring(2, 2);
            string Hex4 = result.Substring(0, 2);


            string Hex = Hex1 + " " + Hex2 + " " + Hex3 + " " + Hex4;

            Clipboard.SetText(Hex);
            textBox2.Text = Hex;
        }

    }
}
