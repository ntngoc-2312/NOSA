//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace API_NOSA.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    
    public partial class Congty
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Congty()
        {
            this.Congviecs = new HashSet<Congviec>();
        }
    
        public int id_congty { get; set; }
        public Nullable<int> id_user { get; set; }
        public string ten { get; set; }
        public string email { get; set; }
        public string diachi { get; set; }
        public string dienthoai { get; set; }
        public string logo { get; set; }
        public string gioithieu { get; set; }
        public string url_website { get; set; }
        [JsonIgnore]
        public virtual User_role User_role { get; set; }
        [JsonIgnore]
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Congviec> Congviecs { get; set; }
    }
}
