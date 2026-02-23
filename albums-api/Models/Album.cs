namespace albums_api.Models
{
    public record Album(int Id, string Title, string Artist, int Year, double Price, string Image_url)  
    {
        public static List<Album> GetAll()
        {
            var albums = new List<Album>()
            {
                new(1, "You, Me and an App Id", "Daprize", 2021, 10.99, "https://aka.ms/albums-daprlogo"),
                new(2, "Seven Revision Army", "The Blue-Green Stripes", 2022, 13.99, "https://aka.ms/albums-containerappslogo"),
                new(3, "Scale It Up", "KEDA Club", 2022, 13.99, "https://aka.ms/albums-kedalogo"),
                new(4, "Lost in Translation", "MegaDNS", 2021, 12.99, "https://aka.ms/albums-envoylogo"),
                new(5, "Lock Down Your Love", "V is for VNET", 2023, 12.99, "https://aka.ms/albums-vnetlogo"),
                new(6, "Sweet Container O' Mine", "Guns N Probeses", 2023, 14.99, "https://aka.ms/albums-containerappslogo")
            };

            return albums;
        }

        public static Album? GetById(int id)
        {
            var albums = GetAll();
            return albums.FirstOrDefault(a => a.Id == id);
        } 
    }
}
