﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.BazanosSava
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Горячие напитки.
    /// </summary>
    // *** Start programmer edit section *** (ГорячиеНапитки CustomAttributes)

    // *** End programmer edit section *** (ГорячиеНапитки CustomAttributes)
    [AutoAltered()]
    [Caption("Горячие напитки")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ГорячиеНапиткиE", new string[] {
            "Напитки as \'Напитки\'",
            "Напитки.Наименование as \'Наименование\'",
            "Напитки.Цена as \'Цена\'",
            "Сахар as \'Сахар\'"}, Hidden=new string[] {
            "Напитки.Наименование"})]
    [MasterViewDefineAttribute("ГорячиеНапиткиE", "Напитки", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class ГорячиеНапитки : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.BazanosSava.КолвоСахара fСахар;
        
        private IIS.BazanosSava.Напитки fНапитки;
        
        private IIS.BazanosSava.Заказ fЗаказ;
        
        // *** Start programmer edit section *** (ГорячиеНапитки CustomMembers)

        // *** End programmer edit section *** (ГорячиеНапитки CustomMembers)

        
        /// <summary>
        /// Сахар.
        /// </summary>
        // *** Start programmer edit section *** (ГорячиеНапитки.Сахар CustomAttributes)

        // *** End programmer edit section *** (ГорячиеНапитки.Сахар CustomAttributes)
        public virtual IIS.BazanosSava.КолвоСахара Сахар
        {
            get
            {
                // *** Start programmer edit section *** (ГорячиеНапитки.Сахар Get start)

                // *** End programmer edit section *** (ГорячиеНапитки.Сахар Get start)
                IIS.BazanosSava.КолвоСахара result = this.fСахар;
                // *** Start programmer edit section *** (ГорячиеНапитки.Сахар Get end)

                // *** End programmer edit section *** (ГорячиеНапитки.Сахар Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ГорячиеНапитки.Сахар Set start)

                // *** End programmer edit section *** (ГорячиеНапитки.Сахар Set start)
                this.fСахар = value;
                // *** Start programmer edit section *** (ГорячиеНапитки.Сахар Set end)

                // *** End programmer edit section *** (ГорячиеНапитки.Сахар Set end)
            }
        }
        
        /// <summary>
        /// Горячие напитки.
        /// </summary>
        // *** Start programmer edit section *** (ГорячиеНапитки.Напитки CustomAttributes)

        // *** End programmer edit section *** (ГорячиеНапитки.Напитки CustomAttributes)
        [PropertyStorage(new string[] {
                "Напитки"})]
        [NotNull()]
        public virtual IIS.BazanosSava.Напитки Напитки
        {
            get
            {
                // *** Start programmer edit section *** (ГорячиеНапитки.Напитки Get start)

                // *** End programmer edit section *** (ГорячиеНапитки.Напитки Get start)
                IIS.BazanosSava.Напитки result = this.fНапитки;
                // *** Start programmer edit section *** (ГорячиеНапитки.Напитки Get end)

                // *** End programmer edit section *** (ГорячиеНапитки.Напитки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ГорячиеНапитки.Напитки Set start)

                // *** End programmer edit section *** (ГорячиеНапитки.Напитки Set start)
                this.fНапитки = value;
                // *** Start programmer edit section *** (ГорячиеНапитки.Напитки Set end)

                // *** End programmer edit section *** (ГорячиеНапитки.Напитки Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.BazanosSava.Заказ.
        /// </summary>
        // *** Start programmer edit section *** (ГорячиеНапитки.Заказ CustomAttributes)

        // *** End programmer edit section *** (ГорячиеНапитки.Заказ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Заказ"})]
        public virtual IIS.BazanosSava.Заказ Заказ
        {
            get
            {
                // *** Start programmer edit section *** (ГорячиеНапитки.Заказ Get start)

                // *** End programmer edit section *** (ГорячиеНапитки.Заказ Get start)
                IIS.BazanosSava.Заказ result = this.fЗаказ;
                // *** Start programmer edit section *** (ГорячиеНапитки.Заказ Get end)

                // *** End programmer edit section *** (ГорячиеНапитки.Заказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ГорячиеНапитки.Заказ Set start)

                // *** End programmer edit section *** (ГорячиеНапитки.Заказ Set start)
                this.fЗаказ = value;
                // *** Start programmer edit section *** (ГорячиеНапитки.Заказ Set end)

                // *** End programmer edit section *** (ГорячиеНапитки.Заказ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ГорячиеНапиткиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГорячиеНапиткиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГорячиеНапиткиE", typeof(IIS.BazanosSava.ГорячиеНапитки));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ГорячиеНапитки.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfГорячиеНапитки CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfГорячиеНапитки CustomAttributes)
    public class DetailArrayOfГорячиеНапитки : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.BazanosSava.DetailArrayOfГорячиеНапитки members)

        // *** End programmer edit section *** (IIS.BazanosSava.DetailArrayOfГорячиеНапитки members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ГорячиеНапитки by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ГорячиеНапитки.
        /// </summary>
        public DetailArrayOfГорячиеНапитки(IIS.BazanosSava.Заказ fЗаказ) : 
                base(typeof(ГорячиеНапитки), ((ICSSoft.STORMNET.DataObject)(fЗаказ)))
        {
        }
        
        public IIS.BazanosSava.ГорячиеНапитки this[int index]
        {
            get
            {
                return ((IIS.BazanosSava.ГорячиеНапитки)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.BazanosSava.ГорячиеНапитки dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
