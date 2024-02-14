using CustomerApp.Server.Models;

namespace CustomerApp.Server.Data
{
    public class SeedData
    {
        // method ensure we have populated the data
        public static async Task EnsurePopulated(IServiceProvider serviceProvider)
        {
            // need to get a context
            CustomerContext context = serviceProvider.GetService<CustomerContext>();
            
            if (context == null)
            {
                throw new Exception("Context can not be found.");
            }


            // check if we have any data in the database
            if (!context.Customer.Any())
            {
                Customer jesse = new Customer
                {
                    FirstName = "Jesse",
                    LastName = "Harlan",
                    Birthdate = new DateTime(1982, 04, 14),
                    PhoneNumbers = new List<Phone>
                    {
                        new Phone { PhoneNumber = "3605551212" },
                        new Phone { PhoneNumber = "3605551213" },
                    }
                };

                // seed the database
                context.Customer.Add(jesse);


                await context.SaveChangesAsync();

            } else
            {
                throw new Exception("Database has already been seeded.");
            }
        }
    }
}
