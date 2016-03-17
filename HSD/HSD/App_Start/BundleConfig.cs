using System.Web;
using System.Web.Optimization;

namespace HSD
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/bundles/HSDcss").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/font-awesome.css",
                      "~/Content/style-library-1.css",
                      "~/Content/plugins.css",
                      "~/Content/blocks.css",
                      "~/Content/custom.css"));
            bundles.Add(new ScriptBundle("~/bundles/HSDjs").Include(
                      "~/Scripts/jquery-2.2.1.min.js",
                      "~/Scripts/bootstrap.min.js",
                      "~/Scripts/plugins.js",
                      "~/Scripts/skit-scripts.js",
                      "~/Scripts/custom.js"));
        }
    }
}
