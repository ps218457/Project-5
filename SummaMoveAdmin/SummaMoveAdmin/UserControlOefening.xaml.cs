using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Microsoft.Win32;
using SummaMoveAdmin.Models;

namespace SummaMoveAdmin
{
    /// <summary>
    /// Interaction logic for UserControlOefening.xaml
    /// </summary>
    public partial class UserControlOefening : UserControl, INotifyPropertyChanged
    {
        #region PropertyChanged
        public event PropertyChangedEventHandler PropertyChanged;
        // Create the OnPropertyChanged method to raise the event
        // The calling member's name will be used as the parameter.
        protected void OnPropertyChanged([CallerMemberName] string name = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
        }
        #endregion

        #region Propertys

     

        private ObservableCollection<Oefening> oefening = new ObservableCollection<Oefening>();
        public ObservableCollection<Oefening> Oefeningen
        {
            get { return oefening; }
            set { oefening = value; }
        }

        private Models.Oefening selectedoefening;
        public Models.Oefening SelectedOefening
        {
            get { return selectedoefening; }
            set
            {
                selectedoefening = value; OnPropertyChanged();
            }
        }
        #endregion
    
        SummaMoveDB dB = new SummaMoveDB();
        public UserControlOefening()
        {
            InitializeComponent();

            LoadData();
            DataContext = this;
        }

        private void LoadData()
        {
            if (dB.GetAlleUser() == null)
            {
                MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);
            }
            else
            {

                List<Oefening> oefeningen = dB.GetOefenings();
                try
                {
                    Oefeningen.Clear();
                    foreach (Oefening item in oefeningen)
                    {
                        Oefeningen.Add(item);
                    }
                }
                catch
                {
                    Oefeningen.Clear();
                    MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);

                }
            }
        }

        private void Update_Click(object sender, RoutedEventArgs e)
        {
            OefeningEdit oefening = new OefeningEdit((int)SelectedOefening.ID);
            oefening.ShowDialog();
            LoadData();
        }

        private void Delete_Click(object sender, RoutedEventArgs e)
        {

            if (!dB.DeleteOefeningById((int)selectedoefening.ID))
            {
                MessageBox.Show("Er is een fout bij het verwijderen");
                return;
            };
            LoadData();
        }

        private void Create_Click(object sender, RoutedEventArgs e)
        {
            OefeningAanmaken oefening = new OefeningAanmaken();
            oefening.ShowDialog();
            LoadData();
        }

        private void TBzoek_TextChanged(object sender, TextChangedEventArgs e)
        {
            if ((string.IsNullOrEmpty(TBzoek.Text)))
            {
                LoadData();
            }
            else
            {
                string zoek = TBzoek.Text;
                if (dB.zoekUser(zoek) == null)
                {
                    MessageBox.Show("Er is geen pesoon met de zoeke gegevens ", "", MessageBoxButton.OK, MessageBoxImage.Error);
                    LoadData();
                }
                else
                {

                    List<Oefening> oefeningen = dB.zoekOefening(zoek);
                    try
                    {
                        Oefeningen.Clear();
                        foreach (Oefening item in oefeningen)
                        {
                            Oefeningen.Add(item);
                        }
                    }
                    catch
                    {
                        Oefeningen.Clear();
                        MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);

                    }
                }
            }
        }

        private void Inzien_Click(object sender, RoutedEventArgs e)
        {
            OefeningInzien oefening = new OefeningInzien((int)SelectedOefening.ID);
            oefening.ShowDialog();

        }

        private void QRMaken_Click(object sender, RoutedEventArgs e)
        {
            QRCodeMaken qR = new QRCodeMaken((int)SelectedOefening.ID , (string)SelectedOefening.Naam);
            qR.ShowDialog();

        }
    }
}
