﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using MySql.Data.MySqlClient;
using System.Data;
namespace SummaMoveAdmin.Models
{
    public class SummaMoveDB
    {
        private MySqlConnection conn
              = new MySqlConnection(ConfigurationManager.ConnectionStrings["SummamoveCS"]
                  .ConnectionString);


        #region Select
        public List<Users> GetAlleUser()
        {
            List<Users> users = new List<Users>();
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                //sql.CommandText = "SELECT users.id, users.name, users.email , users.password , user_roles.user_id , user_roles.role_id , roles.name FROM users INNER JOIN user_roles on user_roles.user_id = users.id INNER JOIN roles ON roles.id = user_roles.role_id";
                sql.CommandText = "SELECT * FROM users";
                MySqlDataReader reader = sql.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);

                foreach (DataRow row in table.Rows)
                {
                    Users comet = new Users();
                    comet.ID = (int)row["id"];
                    comet.Name = (string)row["name"];
                    comet.Email = (string)row["email"];


                    users.Add(comet);
                }
            }
            catch (Exception e)
            {

                Console.Error.WriteLine(e.Message);
                return null;

            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return users;
        }

        public Users getUsersBYID(int ID)
        {
            Users user = new Users();
            try
            {

                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "SELECT * FROM users WHERE id = @ID ";
                sql.Parameters.AddWithValue("@ID", ID);
                MySqlDataReader reader = sql.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);

                foreach (DataRow row in table.Rows)
                {
                    user.ID = (int)row["id"];
                    user.Name = (string)row["name"];
                    user.Email = (string)row["Email"];
                }
            }
            catch (Exception e)
            {

                Console.Error.WriteLine(e.Message);
                return null;

            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return user;
        }


        public Oefening getOefeningBYID(int ID)
        {
            Oefening oefening = new Oefening();
            try
            {

                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "SELECT * FROM oefening WHERE id = @ID ";
                sql.Parameters.AddWithValue("@ID", ID);
                MySqlDataReader reader = sql.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);

                foreach (DataRow row in table.Rows)
                {
                    oefening.ID = (int)row["id"];
                    oefening.Naam = (string)row["naam"];
                    oefening.Beschrijving = (string)row["beschrijving"];
                    oefening.Foto = (byte[])row["foto"];
                }
            }
            catch (Exception e)
            {

                Console.Error.WriteLine(e.Message);
                return null;

            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return oefening;
        }


        public List<Oefening> GetOefenings()
        {
            List<Oefening> oefening = new List<Oefening>();
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "SELECT * FROM oefening";
                MySqlDataReader reader = sql.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);

                foreach (DataRow row in table.Rows)
                {
                    Oefening comet = new Oefening();
                    comet.ID = (int)row["id"];
                    comet.Naam = (string)row["naam"];
                    comet.Beschrijving = (string)row["beschrijving"];
                    comet.Foto = (byte[])row["foto"];
                    


                    oefening.Add(comet);
                }
            }
            catch (Exception e)
            {

                Console.Error.WriteLine(e.Message);
                return null;

            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return oefening;
        }

        public List<Prestatie> GetPrestaties()
        {
            List<Prestatie> Prestatie = new List<Prestatie>();
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "SELECT users.id, users.name, prestatie.id , prestatie.User_id , prestatie.oefening_id, prestatie.Datum , prestatie.Starttijd , prestatie.Eindtijd , prestatie.aantal , oefening.id ,oefening.naam FROM users INNER JOIN prestatie on prestatie.User_id = users.id INNER JOIN oefening ON oefening.id = prestatie.oefening_id";
               
                MySqlDataReader reader = sql.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);

                foreach (DataRow row in table.Rows)
                {
                    Prestatie comet = new Prestatie();
                    comet.ID = (int)row["id"];
                    comet.Name = (string)row["name"];
                    comet.Naam = (string)row["naam"];
                    comet.Datum = (DateTime)row["Datum"];
                    comet.Starttijd = (TimeSpan)row["Starttijd"];
                    comet.Eindtijd = (TimeSpan)row["Eindtijd"];
                    comet.Aantal = (int)row[8];
                    Prestatie.Add(comet);
                }
            }
            catch (Exception e)
            {

                Console.Error.WriteLine(e.Message);
                return null;

            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return Prestatie;
        }

        #endregion

        #region Zoekmachiene

        public List<Prestatie> ZoekPrestatieOpDatum(DateTime Datum)
        {
            List<Prestatie> Prestatie = new List<Prestatie>();
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "SELECT users.id, users.name, prestatie.id , prestatie.User_id , prestatie.oefening_id, prestatie.Datum , prestatie.Starttijd , prestatie.Eindtijd , prestatie.aantal , oefening.id ,oefening.naam FROM users INNER JOIN prestatie on prestatie.User_id = users.id INNER JOIN oefening ON oefening.id = prestatie.oefening_id WHERE prestatie.Datum = @Datum ";
                sql.Parameters.AddWithValue("@Datum", Datum);

                MySqlDataReader reader = sql.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);

                foreach (DataRow row in table.Rows)
                {
                    Prestatie comet = new Prestatie();
                    comet.ID = (int)row["id"];
                    comet.Name = (string)row["name"];
                    comet.Naam = (string)row["naam"];
                    comet.Datum = (DateTime)row["Datum"];
                    comet.Starttijd = (TimeSpan)row["Starttijd"];
                    comet.Eindtijd = (TimeSpan)row["Eindtijd"];
                    comet.Aantal = (int)row[8];
                    Prestatie.Add(comet);
                }
            }
            catch (Exception e)
            {

                Console.Error.WriteLine(e.Message);
                return null;

            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return Prestatie;



        }

        public List<Prestatie> zoePrestatie(string Zoek)
        {
            List<Prestatie> Prestatie = new List<Prestatie>();
            try
            {

                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "SELECT users.id, users.name, prestatie.id , prestatie.User_id , prestatie.oefening_id, prestatie.Datum , prestatie.Starttijd , prestatie.Eindtijd , prestatie.aantal , oefening.id ,oefening.naam FROM users INNER JOIN prestatie on prestatie.User_id = users.id INNER JOIN oefening ON oefening.id = prestatie.oefening_id WHERE users.name  LIKE '%" + Zoek + "%' OR oefening.naam LIKE '%" + Zoek + "%'";
                MySqlDataReader reader = sql.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);

                foreach (DataRow row in table.Rows)
                {
                    Prestatie comet = new Prestatie();
                    comet.ID = (int)row["id"];
                    comet.Name = (string)row["name"];
                    comet.Naam = (string)row["naam"];
                    comet.Datum = (DateTime)row["Datum"];
                    comet.Starttijd = (TimeSpan)row["Starttijd"];
                    comet.Eindtijd = (TimeSpan)row["Eindtijd"];
                    comet.Aantal = (int)row[8];
                    Prestatie.Add(comet);


                }
            }
            catch (Exception e)
            {

                Console.Error.WriteLine(e.Message);
                return null;

            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return Prestatie;
        }

        public List<Users> zoekUser(string Zoek)
            {
            List<Users> user = new List<Users>();
            try
            {

                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "SELECT* FROM `users` WHERE `name` LIKE '%" + Zoek + "%' OR email LIKE '%" + Zoek + "%'";
                MySqlDataReader reader = sql.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);

                foreach (DataRow row in table.Rows)
                {
                    Users comet = new Users();
                    comet.ID = (int)row["id"];
                    comet.Name = (string)row["name"];
                    comet.Email = (string)row["email"];



                    user.Add(comet);
                }
            }
            catch (Exception e)
            {

                Console.Error.WriteLine(e.Message);
                return null;

            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return user;
        }


        public List<Oefening> zoekOefening(string Zoek)
        {
            List<Oefening> oefening = new List<Oefening>();
            try
            {

                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "SELECT* FROM `oefening` WHERE `naam` LIKE '%" + Zoek + "%' ";
                MySqlDataReader reader = sql.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);

                foreach (DataRow row in table.Rows)
                {
                    Oefening comet = new Oefening();
                    comet.ID = (int)row["id"];
                    comet.Naam = (string)row["naam"];
                    comet.Beschrijving = (string)row["beschrijving"];
                    comet.Foto = (byte[])row["foto"];


                    oefening.Add(comet);
                }
            }
            catch (Exception e)
            {

                Console.Error.WriteLine(e.Message);
                return null;

            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return oefening;
        }
        #endregion

        #region Insert

        //public bool InsertEmployees(string First_name, string Last_name, string Address, string Phone, string Zipcode, string City, string Personal_email, DateTime Birth_date, string Burger_service_nummer, string Password, int Roles)
        //{
        //    bool result = false;
        //    try
        //    {
        //        conn.Open();
        //        MySqlCommand sql = conn.CreateCommand();
        //        sql.CommandText = "INSERT INTO `employees`( `first_name`, `last_name`, `address`, `phone`, `zipcode`, `city`,`personal_email`, `birth_date`, `burger_service_nummer`) " +
        //            "VALUES(@First_name , @Last_name , @Address , @Phone , @Zipcode , @City , @Personal_email , @Birth_date , @Burger_service_nummer)";
        //        sql.Parameters.AddWithValue("@First_name", First_name);
        //        sql.Parameters.AddWithValue("@Last_name", Last_name);
        //        sql.Parameters.AddWithValue("@Address", Address);
        //        sql.Parameters.AddWithValue("@Phone", Phone);
        //        sql.Parameters.AddWithValue("@Zipcode", Zipcode);
        //        sql.Parameters.AddWithValue("@City", City);
        //        sql.Parameters.AddWithValue("@Personal_email", Personal_email);
        //        sql.Parameters.AddWithValue("@Birth_date", Birth_date);
        //        sql.Parameters.AddWithValue("@Burger_service_nummer", Burger_service_nummer);


        //        result = sql.ExecuteNonQuery() == 1;
        //        if (result == true)
        //        {
        //            result = false;
        //            sql.CommandText = "INSERT INTO `users`(`name`, `email`, `password`) VALUES (@name , @email ,@Password )";
        //            sql.Parameters.AddWithValue("@name", First_name);
        //            sql.Parameters.AddWithValue("@email", Personal_email);
        //            sql.Parameters.AddWithValue("@Password", Password);
        //            result = sql.ExecuteNonQuery() == 1;
        //        }
        //        if (result == true)
        //        {
        //            result = false;
        //            sql.CommandText = "SELECT `id` FROM `users` WHERE email = @medewerkerEmail";
        //            sql.Parameters.AddWithValue("@medewerkerEmail", Personal_email);
        //            MySqlDataReader reader = sql.ExecuteReader();
        //            DataTable table = new DataTable();
        //            table.Load(reader);
        //            ulong id = 0;
        //            foreach (DataRow row in table.Rows)
        //            {


        //            }

        //            //foreach (DataRow row in table.Rows)
        //            //{

        //            //}
        //            sql.CommandText = "INSERT INTO `user_roles`( `user_id`, `role_id`) VALUES(@user_id ,@role_id )";
        //            sql.Parameters.AddWithValue("@user_id", id);
        //            sql.Parameters.AddWithValue("@role_id", Roles);
        //            result = sql.ExecuteNonQuery() == 1;
        //        }

        //    }
        //    catch (Exception e)
        //    {
        //        Console.Error.WriteLine(e.Message);
        //        return false;
        //    }
        //    finally
        //    {
        //        if (conn.State == ConnectionState.Open)
        //        {
        //            conn.Close();
        //        }
        //    }
        //    return result;
        //}

        public bool InsertUser(string Name, string Email, string Password)
        {
            bool result = false;
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText =
                    "INSERT INTO users( name , email , password )" +
                    " VALUES(@Name, @Email , @Password)";
                sql.Parameters.AddWithValue("@Name", Name);
                sql.Parameters.AddWithValue("@Email", Email);
                sql.Parameters.AddWithValue("@Password", Password);

                result = sql.ExecuteNonQuery() == 1;
            }
            catch (Exception e)
            {
                Console.Error.WriteLine(e.Message);
                return false;
            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return result;
        }

        public bool InsertOefening(string Naam, string Beschrijving, byte[] Foto)
        {
            bool result = false;
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText =
                    "INSERT INTO oefening( naam , beschrijving , foto	 )" +
                    " VALUES(@Naam, @Beschrijving , @Foto)";
                sql.Parameters.AddWithValue("@Naam", Naam);
                sql.Parameters.AddWithValue("@Beschrijving", Beschrijving);
                sql.Parameters.AddWithValue("@Foto", Foto);

                result = sql.ExecuteNonQuery() == 1;
            }
            catch (Exception e)
            {
                Console.Error.WriteLine(e.Message);
                return false;
            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return result;
        }


        #endregion


        #region Update


        public bool UpdateUser(int ID, string Name, string Email)
        {
            bool result = false;
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "UPDATE  users  SET  name = @name , email = @email   WHERE id  = @ID";
                sql.Parameters.AddWithValue("@ID", ID);
                sql.Parameters.AddWithValue("@name", Name);
                sql.Parameters.AddWithValue("@email", Email);
                result = sql.ExecuteNonQuery() == 1;
            }
            catch (Exception e)
            {
                Console.Error.WriteLine(e.Message);
                return false;
            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return result;
        }

        public bool UpdateOefening(int ID ,string Naam, string Beschrijving, byte[] Foto)
        {
            bool result = false;
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "UPDATE  oefening  SET  naam = @Naam , beschrijving = @Beschrijving , foto = @Foto  WHERE id  = @ID";
                sql.Parameters.AddWithValue("@ID", ID);
                sql.Parameters.AddWithValue("@naam", Naam);
                sql.Parameters.AddWithValue("@beschrijving", Beschrijving);
                sql.Parameters.AddWithValue("@foto", Foto);
                result = sql.ExecuteNonQuery() == 1;
            }
            catch (Exception e)
            {
                Console.Error.WriteLine(e.Message);
                return false;
            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return result;
        }



        #endregion


        #region Delet


        public bool DeleteUsersById(int id)
        {
            bool result = false;
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText =
                    " DELETE FROM users WHERE  id = @ID";
                sql.Parameters.AddWithValue("@ID", id);

                result = sql.ExecuteNonQuery() == 1;
            }
            catch (Exception e)
            {
                Console.Error.WriteLine(e.Message);
                return false;
            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return result;
        }

        public bool DeleteOefeningById(int id)
        {
            bool result = false;
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText =
                    " DELETE FROM oefening WHERE  id = @ID";
                sql.Parameters.AddWithValue("@ID", id);

                result = sql.ExecuteNonQuery() == 1;
            }
            catch (Exception e)
            {
                Console.Error.WriteLine(e.Message);
                return false;
            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return result;
        }


        #endregion

    }
}
