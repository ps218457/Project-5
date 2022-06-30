using Microsoft.Win32;
using SummaMoveAdmin.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
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

namespace SummaMoveAdmin
{
    /// <summary>
    /// Interaction logic for OefeningEdit.xaml
    /// </summary>
    public partial class OefeningEdit : Window
    {
        int id = 0;
        byte[] foto;
        public OefeningEdit(int ID)
        {
            InitializeComponent();
            id = id + ID;
            LoadData();

            DataContext = this;
        }
        private ObservableCollection<Oefening> oefening = new ObservableCollection<Oefening>();
        public ObservableCollection<Oefening> Oefening
        {
            get { return oefening; }
            set { oefening = value; }     // Informeer XAML indien gewijzigd
        }
        SummaMoveDB dB = new SummaMoveDB();
        private void LoadData()
        {
            if (dB.getOefeningBYID(id) == null)
            {
                MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);

            }
            else
            {

                Oefening oefeningen = dB.getOefeningBYID(id);
                Oefening.Clear();                    // Maak Observable Collection eerst leeg
                Oefening.Add(oefeningen);
                TBNaam.Text = oefeningen.Naam;
                TBBeschrijving.Text = oefeningen.Beschrijving;
                foto = oefeningen.Foto;





            }

        }

        private void BTOpslaan_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                if (!dB.UpdateOefening(id, TBNaam.Text, TBBeschrijving.Text , foto))
                {
                    MessageBox.Show("Er is een fout bij het update");
                    return;
                }
                this.Close();
            }
            catch
            {
                MessageBox.Show("Er is een fout bij het update");
            }
        }

        private void Selectpicture_Click(object sender, RoutedEventArgs e)
        {
            OpenFileDialog op = new OpenFileDialog();
            op.Title = "Select a picture";
            op.Filter = "All supported graphics|*.jpg;*.jpeg;*.png|" +
                "JPEG (*.jpg;*.jpeg)|*.jpg;*.jpeg|" +
                "Portable Network Graphic (*.png)|*.png";

            if (op.ShowDialog() == true)
            {

                imag.Source = new BitmapImage(new Uri(op.FileName));
                foto = File.ReadAllBytes(op.FileName);
                
            }
        }
    }
}
