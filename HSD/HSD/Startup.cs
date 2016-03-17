using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HSD.Startup))]
namespace HSD
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
