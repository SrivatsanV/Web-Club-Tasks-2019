#pragma checksum "d:\Projects\Webclub-tasks\Blazor_App\Pages\FetchData.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "aedc460332ca397ec2f366aacf570b4f50764583"
// <auto-generated/>
#pragma warning disable 1591
#pragma warning disable 0414
#pragma warning disable 0649
#pragma warning disable 0169

namespace Blazor_App.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
#line 1 "d:\Projects\Webclub-tasks\Blazor_App\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#line 2 "d:\Projects\Webclub-tasks\Blazor_App\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#line 3 "d:\Projects\Webclub-tasks\Blazor_App\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#line 5 "d:\Projects\Webclub-tasks\Blazor_App\_Imports.razor"
using Blazor_App;

#line default
#line hidden
#line 6 "d:\Projects\Webclub-tasks\Blazor_App\_Imports.razor"
using Blazor_App.Shared;

#line default
#line hidden
#line 4 "d:\Projects\Webclub-tasks\Blazor_App\Pages\FetchData.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#line 5 "d:\Projects\Webclub-tasks\Blazor_App\Pages\FetchData.razor"
using Microsoft.AspNetCore.Components;

#line default
#line hidden
    [Microsoft.AspNetCore.Components.LayoutAttribute(typeof(MainLayout))]
    [Microsoft.AspNetCore.Components.RouteAttribute("/fetchdata")]
    public class FetchData : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.RenderTree.RenderTreeBuilder builder)
        {
        }
        #pragma warning restore 1998
#line 53 "d:\Projects\Webclub-tasks\Blazor_App\Pages\FetchData.razor"
       

    Millions[] arr;

    protected override async Task OnInitializedAsync()
    {
            arr = await Http.GetJsonAsync<Millions[]>("https://million-api-101.herokuapp.com/0/14");
    }
     protected override async Task OnAfterRenderAsync()
    {
         if (!ComponentContext.IsConnected)
        {
            return;
        }
        if(arr!=null){
            await JsRuntime.InvokeAsync<int>("AppendData");
        }
    }

    public class Millions
    {
        public string GlobalRank {get;set;}

        public string TldRank {get;set;}
         
        public string RefSubNets {get;set;}

        public string RefIPs {get;set;}

        public string IDN_Domain {get;set;}

        public string IDN_TLD {get;set;}

        public string PrevGlobalRank {get;set;}

        public string PrevTldRank {get;set;}
         
        public string PrevRefSubNets {get;set;}

        public string PrevRefIPs {get;set;}
    }

#line default
#line hidden
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IComponentContext ComponentContext { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IJSRuntime JsRuntime { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private HttpClient Http { get; set; }
    }
}
#pragma warning restore 1591
