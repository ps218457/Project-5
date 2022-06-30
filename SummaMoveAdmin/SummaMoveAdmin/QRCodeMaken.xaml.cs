using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using Microsoft.Win32;
using QRCoder;
namespace SummaMoveAdmin
{
    /// <summary>
    /// Interaction logic for QRCodeMaken.xaml
    /// </summary>
    public partial class QRCodeMaken : Window
    {
        int id = 0;
        string naam;
        public QRCodeMaken(int ID , string Naam)
        {
            id = id + ID;
            naam = Naam;
            InitializeComponent();
        }
        Bitmap yazan;


        SaveFileDialog saveFile = new SaveFileDialog();
        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            QRCodeGenerator qRCodeGenerator = new QRCodeGenerator();
            QRCodeData qRCodeData = qRCodeGenerator.CreateQrCode(id.ToString(), QRCodeGenerator.ECCLevel.Q);
            QRCode qRCode = new QRCode(qRCodeData);
            Bitmap qrCodeImage = qRCode.GetGraphic(20);
            imgbarcode.Source = BitmapToImageSource(qrCodeImage);
            yazan = qrCodeImage;
        }

        private ImageSource BitmapToImageSource(Bitmap bitmap)
        {
            using (MemoryStream memory = new MemoryStream())
            {
                bitmap.Save(memory, System.Drawing.Imaging.ImageFormat.Bmp);
                memory.Position = 0;
                BitmapImage bitmapImage = new BitmapImage();
                bitmapImage.BeginInit();
                bitmapImage.StreamSource = memory;
                bitmapImage.CacheOption = BitmapCacheOption.OnLoad;
                bitmapImage.EndInit();
                return bitmapImage;
            }
        }

        private void btnsave_Click(object sender, RoutedEventArgs e)
        {
            saveFile.Filter = "PNG|* .png";
            saveFile.FileName = naam;
            if (saveFile.ShowDialog() == true)
            {
                if (yazan != null)
                {
                    yazan.Save(string.Concat(saveFile.FileName), ImageFormat.Png);
                }
            }
            this.Close();
        }
    }
}
