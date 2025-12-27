import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.56/deno-dom-wasm.ts";
import { extractElementFromHtml, treeDrawer } from "./extractors.ts";

const pieceOfDom = `
<section id="products">
      
        <div id="">
          
            <div id="js-product-list-top" class="products-selection row">
    <div class="col-md-3 col-lg-2 col-xs-12 col-xl-2 col-sm-3 lgrid text-xs-left">
            <div class="hidden-md-up compact-filter-button">
            <button type="button" class="btn btn-default toggleAF">Filtrer</button>
        </div>
          <div class="wb-grid-list display">
      <span id="wblist" class="active selected"><svg width="20px" height="20px"><use xlink:href="#clist"></use> </svg></span>
      <span id="wbgrid"><svg width="18px" height="18px"><use xlink:href="#cgrid"></use> </svg></span>
    </div>
  
  </div>
     <div class="col-md-4 col-lg-4 col-xl-4 hidden-lg-down total-products text-xs-right">
          <p>Il y a 885 produits.</p>
      </div>
  <div class="col-md-9 col-lg-6 col-xl-6 col-xs-12 col-sm-9 sro">
    <div class="row sort-by-row">
      
      
        <span class="col-sm-4 col-md-6 col-lg-6 col-xl-6 hidden-sm-down sort-by text-xs-right">Trier par :</span>
<div class="col-sm-8 col-xs-12 col-md-6 col-xl-6 col-lg-6 products-sort-order dropdown js-dropdown">
  <button class="btn-unstyle select-title" rel="nofollow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Prix croissants    <i class="material-icons float-xs-right"></i>
  </button>
  <div class="dropdown-menu">
          <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable?order=product.position.asc" class="select-list js-search-link">
        Pertinence
      </a>
          <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable?order=product.date_add.desc" class="select-list js-search-link">
        Nouveaux Produits en premier
      </a>
          <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable?order=product.name.asc" class="select-list js-search-link">
        Nom, A à Z
      </a>
          <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable?order=product.name.desc" class="select-list js-search-link">
        Nom, Z à A
      </a>
          <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable?order=product.price.asc" class="select-list current js-search-link">
        Prix croissants
      </a>
          <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable?order=product.price.desc" class="select-list js-search-link">
        Prix décroissants
      </a>
          <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable?order=product.quantity.desc" class="select-list js-search-link">
        En Stock
      </a>
          <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable?order=product.random.desc" class="select-list js-search-link">
        Aléatoire
      </a>
      </div>
</div>
      

    </div>
  </div>

  <div class="col-sm-12 hidden-md-up text-xs-center showing hidden-sm-down">
    Affichage 1-24 de 885 article(s)
  </div>
</div>
          
        </div>

        
          <div id="" class="hidden-sm-down">
            
          </div>
        

        <div id="">
          
            <div class="af_pl_wrapper clearfix"><div id="js-product-list">
  
    <nav class="pagination">
  <div class="col-md-6 col-sm-6 col-xs-6 text-xs-left">
    
      Affichage 1-24 de 885 article(s)
    
  </div>

  <div class="col-md-6 cl-sm-6 col-xs-6 text-xs-right">
    
             <ul class="page-list clearfix">
        	                    
            <li class="current">
                              <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable" class="disabled js-search-link">
                                      1
                                  </a>
                          </li>
                    
            <li>
                              <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable?page=2" class="js-search-link">
                                      2
                                  </a>
                          </li>
                    
            <li>
                              <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable?page=3" class="js-search-link">
                                      3
                                  </a>
                          </li>
                    
            <li>
                              <span class="spacer">…</span>
                          </li>
                    
            <li>
                              <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable?page=37" class="js-search-link">
                                      37
                                  </a>
                          </li>
                    
            <li>
                              <a rel="next" href="https://www.tunisianet.com.tn/702-ordinateur-portable?page=2" class="next js-search-link">
                                      <i class="material-icons"></i>
                                  </a>
                          </li>
                  </ul>
          
  </div>

</nav>
  
      <div class="products product-thumbs row wb-product-list">
                    
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="90474" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/90474-pc-portable-hp-15-fd0421nk-n100-4-go-256-go-ssd-noir.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/452522-home/pc-portable-hp-15-fd0421nk-n100-4-go-256-go-ssd-noir.jpg" title="301" alt="Pc Portable HP 15-fd0421nk..." data-full-size-image-url="https://www.tunisianet.com.tn/452522-large/pc-portable-hp-15-fd0421nk-n100-4-go-256-go-ssd-noir.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/452520-home/pc-portable-hp-15-fd0421nk-n100-4-go-256-go-ssd-noir.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                                                       </a>
                              <input type="hidden" id="hit_ref0" value="BU8T3EA">
          <input type="hidden" id="hit_id0" value="90474">
          <input type="hidden" id="hit_qte0" value="-1">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/90474-pc-portable-hp-15-fd0421nk-n100-4-go-256-go-ssd-noir.html">Pc Portable HP 15-fd0421nk / N100 / 4 Go / 256 Go SSD / Noir</a></h2>
            <span class="product-reference">[BU8T3EA]</span>
                  
                
        	<div id="product-description-short-90474" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/90474-pc-portable-hp-15-fd0421nk-n100-4-go-256-go-ssd-noir.html">
            	Écran 15.6" HD (1366 x 768), antireflet - Processeur Intel N100, (jusqu'à 3.4 GHz, 6 Mo de mémoire cache) - Mémoire 4 Go DDR4 - Disque SSD M.2 NVMe 256 Go - Carte graphique Intel UHD intégrée - Wi-Fi 6 - Bluetooth 5.4 - Clavier noir profond, de grande taille avec pavé numérique - Caméra HP True Vision HD 720p - Doubles haut-parleurs - 1x port USB Type-C - 2x ports USB Type-A - 1x port HDMI 1.4b - 1x prise combinée casque/microphone - <span style="font-size:10pt;color:#d0121a;"><strong>FreeDOS</strong></span>&nbsp;- Couleur Noir - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt0"></p>
        		<p class="ff_p_field" id="hit_2mvt0"></p>   
            <div id="hit_8lastw0" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w0"></div>
              <div class="ff_div_field" id="hit_8last12w0"></div>
            </div>
            <div id="hit_8lastw0" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w0"></div>
              <div class="ff_div_field" id="hit_8last22w0"></div>
            </div>
            <div id="hit_8lastw0" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w0"></div>
              <div class="ff_div_field" id="hit_8last32w0"></div>
            </div>
            <div id="hit_8lastw0" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w0"></div>
              <div class="ff_div_field" id="hit_8last42w0"></div>
            </div>
            <div id="hit_8lastw0" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w0"></div>
              <div class="ff_div_field" id="hit_8last52w0"></div>
            </div>
            <div id="hit_8lastw0" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w0"></div>
              <div class="ff_div_field" id="hit_8last62w0"></div>
            </div>
            <div id="hit_8lastw0" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w0"></div>
              <div class="ff_div_field" id="hit_8last72w0"></div>
            </div>
            <div id="hit_8lastw0" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w0"></div>
              <div class="ff_div_field" id="hit_8last82w0"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/6_hp">
                <img src="https://www.tunisianet.com.tn/img/m/6.jpg" class="img img-thumbnail manufacturer-logo" alt="HP">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">799,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-1" class="quantity_product quantity_product_90474" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_90474" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_90474" name="id_product_attribute">
		<input type="hidden" value="90474" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_90474" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_90474 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="90474" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="90474" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list stock" title="Disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/6_hp">
                  <img src="https://www.tunisianet.com.tn/img/m/6.jpg" class="img img-thumbnail manufacturer-logo" alt="HP">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">799,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price0" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-1" class="quantity_product quantity_product_90474" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_90474" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_90474" name="id_product_attribute">
		<input type="hidden" value="90474" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_90474" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_90474 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="90474" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="90474" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv0" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d0">
              <input type="text" id="hit_depserv0_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d0">
              <input type="text" id="hit_qteserv0_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d0">
              <input type="text" id="hit_depserv1_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d0">
              <input type="text" id="hit_qteserv1_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d0">
              <input type="text" id="hit_depserv2_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d0">
              <input type="text" id="hit_qteserv2_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d0">
              <input type="text" id="hit_depserv3_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d0">
              <input type="text" id="hit_qteserv3_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d0">
              <input type="text" id="hit_depserv4_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d0">
              <input type="text" id="hit_qteserv4_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d0">
              <input type="text" id="hit_depserv5_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d0">
              <input type="text" id="hit_qteserv5_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d0">
              <input type="text" id="hit_depserv6_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d0">
              <input type="text" id="hit_qteserv6_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d0">
              <input type="text" id="hit_depserv7_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d0">
              <input type="text" id="hit_qteserv7_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d0">
              <input type="text" id="hit_depserv8_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d0">
              <input type="text" id="hit_qteserv8_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d0">
              <input type="text" id="hit_depserv9_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d0">
              <input type="text" id="hit_qteserv9_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d0">
              <input type="text" id="hit_depserv10_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d0">
              <input type="text" id="hit_qteserv10_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d0">
              <input type="text" id="hit_depserv11_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d0">
              <input type="text" id="hit_qteserv11_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d0">
              <input type="text" id="hit_depserv12_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d0">
              <input type="text" id="hit_qteserv12_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d0">
              <input type="text" id="hit_depserv13_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d0">
              <input type="text" id="hit_qteserv13_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d0">
              <input type="text" id="hit_depserv14_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d0">
              <input type="text" id="hit_qteserv14_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d0">
              <input type="text" id="hit_depserv15_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d0">
              <input type="text" id="hit_qteserv15_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d0">
              <input type="text" id="hit_depserv16_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d0">
              <input type="text" id="hit_qteserv16_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d0">
              <input type="text" id="hit_depserv17_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d0">
              <input type="text" id="hit_qteserv17_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d0">
              <input type="text" id="hit_depserv18_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d0">
              <input type="text" id="hit_qteserv18_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d0">
              <input type="text" id="hit_depserv19_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d0">
              <input type="text" id="hit_qteserv19_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_0" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d0">
              <input type="text" id="hit_depserv20_0" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d0">
              <input type="text" id="hit_qteserv20_0" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link0" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list stock" title="Disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="79751" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/79751-pc-portable-asus-vivobook-15-x515ka-celeron-n4500-4-go-256-go-ssd-silver.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/396840-home/pc-portable-asus-vivobook-15-x515ka-celeron-n4500-4-go-256-go-ssd-silver.jpg" title="301" alt="Pc Portable ASUS Vivobook..." data-full-size-image-url="https://www.tunisianet.com.tn/396840-large/pc-portable-asus-vivobook-15-x515ka-celeron-n4500-4-go-256-go-ssd-silver.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/396841-home/pc-portable-asus-vivobook-15-x515ka-celeron-n4500-4-go-256-go-ssd-silver.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                                                                                                                                                    </a>
                              <input type="hidden" id="hit_ref1" value="X515KA-EJ008">
          <input type="hidden" id="hit_id1" value="79751">
          <input type="hidden" id="hit_qte1" value="-1">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/79751-pc-portable-asus-vivobook-15-x515ka-celeron-n4500-4-go-256-go-ssd-silver.html">Pc Portable ASUS Vivobook 15 X515KA / Celeron N4500 / 4 Go / 256 Go SSD / Silver</a></h2>
            <span class="product-reference">[X515KA-EJ008]</span>
                  
                
        	<div id="product-description-short-79751" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/79751-pc-portable-asus-vivobook-15-x515ka-celeron-n4500-4-go-256-go-ssd-silver.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong> Écran 15.6" Full HD (1920 x 1080), rétroéclairage LED </strong></span> - Taux de rafraîchissement: <span style="font-size:10pt;color:#d0121a;"><strong>60 Hz</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz, 4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>4 Go DDR4</strong></span>&nbsp;- Disque SSD M.2 NVMe <span style="font-size:10pt;color:#d0121a;"><strong>256 Go</strong></span> - Carte graphique Intel UHD Graphics - Caméra HD 720p - Haut-parleur/Microphone intégrés - Wi-Fi 5 - Bluetooth 5.1 - 1x USB 3.2 - 1x USB-C 3.2 - 2x USB 2.0 - 1x HDMI 1.4 - 1x Prise audio combo 3.5 mm - <span style="font-size:10pt;color:#d0121a;"><strong>FreeDOS</strong></span> - Couleur&nbsp;Argent transparent - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt1"></p>
        		<p class="ff_p_field" id="hit_2mvt1"></p>   
            <div id="hit_8lastw1" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w1"></div>
              <div class="ff_div_field" id="hit_8last12w1"></div>
            </div>
            <div id="hit_8lastw1" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w1"></div>
              <div class="ff_div_field" id="hit_8last22w1"></div>
            </div>
            <div id="hit_8lastw1" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w1"></div>
              <div class="ff_div_field" id="hit_8last32w1"></div>
            </div>
            <div id="hit_8lastw1" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w1"></div>
              <div class="ff_div_field" id="hit_8last42w1"></div>
            </div>
            <div id="hit_8lastw1" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w1"></div>
              <div class="ff_div_field" id="hit_8last52w1"></div>
            </div>
            <div id="hit_8lastw1" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w1"></div>
              <div class="ff_div_field" id="hit_8last62w1"></div>
            </div>
            <div id="hit_8lastw1" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w1"></div>
              <div class="ff_div_field" id="hit_8last72w1"></div>
            </div>
            <div id="hit_8lastw1" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w1"></div>
              <div class="ff_div_field" id="hit_8last82w1"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/79_asus">
                <img src="https://www.tunisianet.com.tn/img/m/79.jpg" class="img img-thumbnail manufacturer-logo" alt="Asus">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">799,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-1" class="quantity_product quantity_product_79751" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_79751" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_79751" name="id_product_attribute">
		<input type="hidden" value="79751" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_79751" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_79751 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="79751" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="79751" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list hstock" title="Non disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/79_asus">
                  <img src="https://www.tunisianet.com.tn/img/m/79.jpg" class="img img-thumbnail manufacturer-logo" alt="Asus">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">799,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price1" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-1" class="quantity_product quantity_product_79751" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_79751" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_79751" name="id_product_attribute">
		<input type="hidden" value="79751" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_79751" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_79751 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="79751" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="79751" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv1" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d1">
              <input type="text" id="hit_depserv0_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d1">
              <input type="text" id="hit_qteserv0_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d1">
              <input type="text" id="hit_depserv1_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d1">
              <input type="text" id="hit_qteserv1_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d1">
              <input type="text" id="hit_depserv2_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d1">
              <input type="text" id="hit_qteserv2_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d1">
              <input type="text" id="hit_depserv3_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d1">
              <input type="text" id="hit_qteserv3_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d1">
              <input type="text" id="hit_depserv4_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d1">
              <input type="text" id="hit_qteserv4_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d1">
              <input type="text" id="hit_depserv5_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d1">
              <input type="text" id="hit_qteserv5_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d1">
              <input type="text" id="hit_depserv6_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d1">
              <input type="text" id="hit_qteserv6_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d1">
              <input type="text" id="hit_depserv7_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d1">
              <input type="text" id="hit_qteserv7_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d1">
              <input type="text" id="hit_depserv8_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d1">
              <input type="text" id="hit_qteserv8_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d1">
              <input type="text" id="hit_depserv9_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d1">
              <input type="text" id="hit_qteserv9_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d1">
              <input type="text" id="hit_depserv10_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d1">
              <input type="text" id="hit_qteserv10_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d1">
              <input type="text" id="hit_depserv11_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d1">
              <input type="text" id="hit_qteserv11_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d1">
              <input type="text" id="hit_depserv12_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d1">
              <input type="text" id="hit_qteserv12_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d1">
              <input type="text" id="hit_depserv13_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d1">
              <input type="text" id="hit_qteserv13_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d1">
              <input type="text" id="hit_depserv14_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d1">
              <input type="text" id="hit_qteserv14_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d1">
              <input type="text" id="hit_depserv15_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d1">
              <input type="text" id="hit_qteserv15_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d1">
              <input type="text" id="hit_depserv16_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d1">
              <input type="text" id="hit_qteserv16_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d1">
              <input type="text" id="hit_depserv17_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d1">
              <input type="text" id="hit_qteserv17_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d1">
              <input type="text" id="hit_depserv18_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d1">
              <input type="text" id="hit_qteserv18_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d1">
              <input type="text" id="hit_depserv19_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d1">
              <input type="text" id="hit_qteserv19_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_1" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d1">
              <input type="text" id="hit_depserv20_1" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d1">
              <input type="text" id="hit_qteserv20_1" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link1" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list hstock" title="Non disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="78271" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/78271-pc-portable-lenovo-v15-g2-ijl-n4500-8-go-256-go-ssd-noir.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/387482-home/pc-portable-lenovo-v15-g2-ijl-n4500-8-go-256-go-ssd-noir.jpg" title="301" alt="Pc Portable Lenovo" data-full-size-image-url="https://www.tunisianet.com.tn/387482-large/pc-portable-lenovo-v15-g2-ijl-n4500-8-go-256-go-ssd-noir.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/387484-home/pc-portable-lenovo-v15-g2-ijl-n4500-8-go-256-go-ssd-noir.jpg" alt="Pc Portable Lenovo" title="Pc Portable Lenovo" itemprop="image" width="250" height="250">
                                                                                                                                                                                                                                                                                                                                                </a>
                              <input type="hidden" id="hit_ref2" value="82QY00PEFE">
          <input type="hidden" id="hit_id2" value="78271">
          <input type="hidden" id="hit_qte2" value="-35">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/78271-pc-portable-lenovo-v15-g2-ijl-n4500-8-go-256-go-ssd-noir.html">Pc Portable Lenovo V15 G2 IJL / N4500 / 8 Go / 256 Go SSD / Noir</a></h2>
            <span class="product-reference">[82QY00PEFE]</span>
                  
                
        	<div id="product-description-short-78271" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/78271-pc-portable-lenovo-v15-g2-ijl-n4500-8-go-256-go-ssd-noir.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" Full HD (1920 x 1080 px), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz, 4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - 2x Haut-parleurs stéréo 1.5 W Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 5</strong></span> - Bluetooth 5.1 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - 1x Ethernet (RJ-45) - <span style="font-size:10pt;color:#d0121a;"><strong>FreeDOS</strong></span> - Couleur Gris arctique - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt2"></p>
        		<p class="ff_p_field" id="hit_2mvt2"></p>   
            <div id="hit_8lastw2" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w2"></div>
              <div class="ff_div_field" id="hit_8last12w2"></div>
            </div>
            <div id="hit_8lastw2" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w2"></div>
              <div class="ff_div_field" id="hit_8last22w2"></div>
            </div>
            <div id="hit_8lastw2" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w2"></div>
              <div class="ff_div_field" id="hit_8last32w2"></div>
            </div>
            <div id="hit_8lastw2" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w2"></div>
              <div class="ff_div_field" id="hit_8last42w2"></div>
            </div>
            <div id="hit_8lastw2" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w2"></div>
              <div class="ff_div_field" id="hit_8last52w2"></div>
            </div>
            <div id="hit_8lastw2" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w2"></div>
              <div class="ff_div_field" id="hit_8last62w2"></div>
            </div>
            <div id="hit_8lastw2" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w2"></div>
              <div class="ff_div_field" id="hit_8last72w2"></div>
            </div>
            <div id="hit_8lastw2" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w2"></div>
              <div class="ff_div_field" id="hit_8last82w2"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="later-stock">Sur commande</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">799,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-35" class="quantity_product quantity_product_78271" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_78271" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_78271" name="id_product_attribute">
		<input type="hidden" value="78271" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_78271" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_78271 wb-enable" data-button-action="add-to-cart" type="submit" disabled="disabled">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="78271" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="78271" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">799,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price2" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="later-stock">Sur commande</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-35" class="quantity_product quantity_product_78271" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_78271" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_78271" name="id_product_attribute">
		<input type="hidden" value="78271" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_78271" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_78271 wb-enable" data-button-action="add-to-cart" type="submit" disabled="disabled">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="78271" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="78271" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv2" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d2">
              <input type="text" id="hit_depserv0_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d2">
              <input type="text" id="hit_qteserv0_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d2">
              <input type="text" id="hit_depserv1_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d2">
              <input type="text" id="hit_qteserv1_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d2">
              <input type="text" id="hit_depserv2_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d2">
              <input type="text" id="hit_qteserv2_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d2">
              <input type="text" id="hit_depserv3_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d2">
              <input type="text" id="hit_qteserv3_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d2">
              <input type="text" id="hit_depserv4_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d2">
              <input type="text" id="hit_qteserv4_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d2">
              <input type="text" id="hit_depserv5_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d2">
              <input type="text" id="hit_qteserv5_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d2">
              <input type="text" id="hit_depserv6_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d2">
              <input type="text" id="hit_qteserv6_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d2">
              <input type="text" id="hit_depserv7_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d2">
              <input type="text" id="hit_qteserv7_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d2">
              <input type="text" id="hit_depserv8_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d2">
              <input type="text" id="hit_qteserv8_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d2">
              <input type="text" id="hit_depserv9_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d2">
              <input type="text" id="hit_qteserv9_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d2">
              <input type="text" id="hit_depserv10_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d2">
              <input type="text" id="hit_qteserv10_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d2">
              <input type="text" id="hit_depserv11_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d2">
              <input type="text" id="hit_qteserv11_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d2">
              <input type="text" id="hit_depserv12_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d2">
              <input type="text" id="hit_qteserv12_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d2">
              <input type="text" id="hit_depserv13_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d2">
              <input type="text" id="hit_qteserv13_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d2">
              <input type="text" id="hit_depserv14_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d2">
              <input type="text" id="hit_qteserv14_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d2">
              <input type="text" id="hit_depserv15_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d2">
              <input type="text" id="hit_qteserv15_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d2">
              <input type="text" id="hit_depserv16_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d2">
              <input type="text" id="hit_qteserv16_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d2">
              <input type="text" id="hit_depserv17_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d2">
              <input type="text" id="hit_qteserv17_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d2">
              <input type="text" id="hit_depserv18_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d2">
              <input type="text" id="hit_qteserv18_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d2">
              <input type="text" id="hit_depserv19_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d2">
              <input type="text" id="hit_qteserv19_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_2" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d2">
              <input type="text" id="hit_depserv20_2" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d2">
              <input type="text" id="hit_qteserv20_2" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link2" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="81140" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81140-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-bleu.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/428260-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-bleu.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/428260-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-bleu.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/403281-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-bleu.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                                                       </a>
                              <input type="hidden" id="hit_ref3" value="82LX00CKFG">
          <input type="hidden" id="hit_id3" value="81140">
          <input type="hidden" id="hit_qte3" value="-24">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81140-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-bleu.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Bleu</a></h2>
            <span class="product-reference">[82LX00CKFG]</span>
                  
                
        	<div id="product-description-short-81140" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81140-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-bleu.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - <span style="font-size:10pt;color:#d0121a;"><strong>FreeDos</strong></span> - Couleur Bleu abyssal - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt3"></p>
        		<p class="ff_p_field" id="hit_2mvt3"></p>   
            <div id="hit_8lastw3" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w3"></div>
              <div class="ff_div_field" id="hit_8last12w3"></div>
            </div>
            <div id="hit_8lastw3" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w3"></div>
              <div class="ff_div_field" id="hit_8last22w3"></div>
            </div>
            <div id="hit_8lastw3" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w3"></div>
              <div class="ff_div_field" id="hit_8last32w3"></div>
            </div>
            <div id="hit_8lastw3" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w3"></div>
              <div class="ff_div_field" id="hit_8last42w3"></div>
            </div>
            <div id="hit_8lastw3" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w3"></div>
              <div class="ff_div_field" id="hit_8last52w3"></div>
            </div>
            <div id="hit_8lastw3" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w3"></div>
              <div class="ff_div_field" id="hit_8last62w3"></div>
            </div>
            <div id="hit_8lastw3" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w3"></div>
              <div class="ff_div_field" id="hit_8last72w3"></div>
            </div>
            <div id="hit_8lastw3" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w3"></div>
              <div class="ff_div_field" id="hit_8last82w3"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">829,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-24" class="quantity_product quantity_product_81140" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81140" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81140" name="id_product_attribute">
		<input type="hidden" value="81140" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81140" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81140 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81140" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81140" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list stock" title="Disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">829,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price3" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-24" class="quantity_product quantity_product_81140" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81140" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81140" name="id_product_attribute">
		<input type="hidden" value="81140" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81140" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81140 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81140" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81140" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv3" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d3">
              <input type="text" id="hit_depserv0_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d3">
              <input type="text" id="hit_qteserv0_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d3">
              <input type="text" id="hit_depserv1_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d3">
              <input type="text" id="hit_qteserv1_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d3">
              <input type="text" id="hit_depserv2_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d3">
              <input type="text" id="hit_qteserv2_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d3">
              <input type="text" id="hit_depserv3_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d3">
              <input type="text" id="hit_qteserv3_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d3">
              <input type="text" id="hit_depserv4_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d3">
              <input type="text" id="hit_qteserv4_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d3">
              <input type="text" id="hit_depserv5_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d3">
              <input type="text" id="hit_qteserv5_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d3">
              <input type="text" id="hit_depserv6_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d3">
              <input type="text" id="hit_qteserv6_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d3">
              <input type="text" id="hit_depserv7_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d3">
              <input type="text" id="hit_qteserv7_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d3">
              <input type="text" id="hit_depserv8_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d3">
              <input type="text" id="hit_qteserv8_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d3">
              <input type="text" id="hit_depserv9_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d3">
              <input type="text" id="hit_qteserv9_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d3">
              <input type="text" id="hit_depserv10_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d3">
              <input type="text" id="hit_qteserv10_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d3">
              <input type="text" id="hit_depserv11_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d3">
              <input type="text" id="hit_qteserv11_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d3">
              <input type="text" id="hit_depserv12_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d3">
              <input type="text" id="hit_qteserv12_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d3">
              <input type="text" id="hit_depserv13_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d3">
              <input type="text" id="hit_qteserv13_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d3">
              <input type="text" id="hit_depserv14_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d3">
              <input type="text" id="hit_qteserv14_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d3">
              <input type="text" id="hit_depserv15_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d3">
              <input type="text" id="hit_qteserv15_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d3">
              <input type="text" id="hit_depserv16_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d3">
              <input type="text" id="hit_qteserv16_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d3">
              <input type="text" id="hit_depserv17_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d3">
              <input type="text" id="hit_qteserv17_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d3">
              <input type="text" id="hit_depserv18_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d3">
              <input type="text" id="hit_qteserv18_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d3">
              <input type="text" id="hit_depserv19_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d3">
              <input type="text" id="hit_qteserv19_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_3" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d3">
              <input type="text" id="hit_depserv20_3" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d3">
              <input type="text" id="hit_qteserv20_3" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link3" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list stock" title="Disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="81139" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81139-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/403274-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/403274-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/403275-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                        </a>
                              <input type="hidden" id="hit_ref4" value="82LX00CFFG">
          <input type="hidden" id="hit_id4" value="81139">
          <input type="hidden" id="hit_qte4" value="-36">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81139-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Gris</a></h2>
            <span class="product-reference">[82LX00CFFG]</span>
                  
                
        	<div id="product-description-short-81139" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81139-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - <span style="font-size:10pt;color:#d0121a;"><strong>FreeDos</strong></span> - Couleur Gris nuage - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt4"></p>
        		<p class="ff_p_field" id="hit_2mvt4"></p>   
            <div id="hit_8lastw4" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w4"></div>
              <div class="ff_div_field" id="hit_8last12w4"></div>
            </div>
            <div id="hit_8lastw4" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w4"></div>
              <div class="ff_div_field" id="hit_8last22w4"></div>
            </div>
            <div id="hit_8lastw4" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w4"></div>
              <div class="ff_div_field" id="hit_8last32w4"></div>
            </div>
            <div id="hit_8lastw4" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w4"></div>
              <div class="ff_div_field" id="hit_8last42w4"></div>
            </div>
            <div id="hit_8lastw4" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w4"></div>
              <div class="ff_div_field" id="hit_8last52w4"></div>
            </div>
            <div id="hit_8lastw4" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w4"></div>
              <div class="ff_div_field" id="hit_8last62w4"></div>
            </div>
            <div id="hit_8lastw4" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w4"></div>
              <div class="ff_div_field" id="hit_8last72w4"></div>
            </div>
            <div id="hit_8lastw4" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w4"></div>
              <div class="ff_div_field" id="hit_8last82w4"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">829,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-36" class="quantity_product quantity_product_81139" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81139" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81139" name="id_product_attribute">
		<input type="hidden" value="81139" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81139" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81139 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81139" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81139" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list stock" title="Disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">829,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price4" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-36" class="quantity_product quantity_product_81139" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81139" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81139" name="id_product_attribute">
		<input type="hidden" value="81139" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81139" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81139 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81139" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81139" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv4" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d4">
              <input type="text" id="hit_depserv0_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d4">
              <input type="text" id="hit_qteserv0_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d4">
              <input type="text" id="hit_depserv1_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d4">
              <input type="text" id="hit_qteserv1_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d4">
              <input type="text" id="hit_depserv2_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d4">
              <input type="text" id="hit_qteserv2_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d4">
              <input type="text" id="hit_depserv3_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d4">
              <input type="text" id="hit_qteserv3_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d4">
              <input type="text" id="hit_depserv4_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d4">
              <input type="text" id="hit_qteserv4_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d4">
              <input type="text" id="hit_depserv5_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d4">
              <input type="text" id="hit_qteserv5_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d4">
              <input type="text" id="hit_depserv6_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d4">
              <input type="text" id="hit_qteserv6_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d4">
              <input type="text" id="hit_depserv7_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d4">
              <input type="text" id="hit_qteserv7_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d4">
              <input type="text" id="hit_depserv8_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d4">
              <input type="text" id="hit_qteserv8_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d4">
              <input type="text" id="hit_depserv9_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d4">
              <input type="text" id="hit_qteserv9_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d4">
              <input type="text" id="hit_depserv10_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d4">
              <input type="text" id="hit_qteserv10_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d4">
              <input type="text" id="hit_depserv11_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d4">
              <input type="text" id="hit_qteserv11_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d4">
              <input type="text" id="hit_depserv12_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d4">
              <input type="text" id="hit_qteserv12_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d4">
              <input type="text" id="hit_depserv13_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d4">
              <input type="text" id="hit_qteserv13_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d4">
              <input type="text" id="hit_depserv14_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d4">
              <input type="text" id="hit_qteserv14_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d4">
              <input type="text" id="hit_depserv15_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d4">
              <input type="text" id="hit_qteserv15_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d4">
              <input type="text" id="hit_depserv16_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d4">
              <input type="text" id="hit_qteserv16_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d4">
              <input type="text" id="hit_depserv17_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d4">
              <input type="text" id="hit_qteserv17_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d4">
              <input type="text" id="hit_depserv18_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d4">
              <input type="text" id="hit_qteserv18_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d4">
              <input type="text" id="hit_depserv19_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d4">
              <input type="text" id="hit_qteserv19_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_4" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d4">
              <input type="text" id="hit_depserv20_4" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d4">
              <input type="text" id="hit_qteserv20_4" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link4" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list stock" title="Disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="81232" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81232-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris-avec-sacoche-offert.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/404184-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris-avec-sacoche-offert.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/404184-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris-avec-sacoche-offert.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/404181-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris-avec-sacoche-offert.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                                                       </a>
                              <input type="hidden" id="hit_ref5" value="82LX00CFFG-SAC">
          <input type="hidden" id="hit_id5" value="81232">
          <input type="hidden" id="hit_qte5" value="-17">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81232-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris-avec-sacoche-offert.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Gris Avec SACOCHE Offert</a></h2>
            <span class="product-reference">[82LX00CFFG-SAC]</span>
                  
                
        	<div id="product-description-short-81232" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81232-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris-avec-sacoche-offert.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - <span style="font-size:10pt;color:#d0121a;"><strong>FreeDos</strong></span> - Couleur Gris nuage - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an Avec SACOCHE Offert</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt5"></p>
        		<p class="ff_p_field" id="hit_2mvt5"></p>   
            <div id="hit_8lastw5" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w5"></div>
              <div class="ff_div_field" id="hit_8last12w5"></div>
            </div>
            <div id="hit_8lastw5" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w5"></div>
              <div class="ff_div_field" id="hit_8last22w5"></div>
            </div>
            <div id="hit_8lastw5" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w5"></div>
              <div class="ff_div_field" id="hit_8last32w5"></div>
            </div>
            <div id="hit_8lastw5" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w5"></div>
              <div class="ff_div_field" id="hit_8last42w5"></div>
            </div>
            <div id="hit_8lastw5" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w5"></div>
              <div class="ff_div_field" id="hit_8last52w5"></div>
            </div>
            <div id="hit_8lastw5" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w5"></div>
              <div class="ff_div_field" id="hit_8last62w5"></div>
            </div>
            <div id="hit_8lastw5" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w5"></div>
              <div class="ff_div_field" id="hit_8last72w5"></div>
            </div>
            <div id="hit_8lastw5" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w5"></div>
              <div class="ff_div_field" id="hit_8last82w5"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">839,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-17" class="quantity_product quantity_product_81232" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81232" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81232" name="id_product_attribute">
		<input type="hidden" value="81232" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81232" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81232 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81232" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81232" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">839,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price5" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-17" class="quantity_product quantity_product_81232" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81232" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81232" name="id_product_attribute">
		<input type="hidden" value="81232" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81232" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81232 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81232" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81232" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv5" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d5">
              <input type="text" id="hit_depserv0_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d5">
              <input type="text" id="hit_qteserv0_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d5">
              <input type="text" id="hit_depserv1_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d5">
              <input type="text" id="hit_qteserv1_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d5">
              <input type="text" id="hit_depserv2_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d5">
              <input type="text" id="hit_qteserv2_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d5">
              <input type="text" id="hit_depserv3_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d5">
              <input type="text" id="hit_qteserv3_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d5">
              <input type="text" id="hit_depserv4_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d5">
              <input type="text" id="hit_qteserv4_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d5">
              <input type="text" id="hit_depserv5_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d5">
              <input type="text" id="hit_qteserv5_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d5">
              <input type="text" id="hit_depserv6_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d5">
              <input type="text" id="hit_qteserv6_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d5">
              <input type="text" id="hit_depserv7_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d5">
              <input type="text" id="hit_qteserv7_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d5">
              <input type="text" id="hit_depserv8_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d5">
              <input type="text" id="hit_qteserv8_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d5">
              <input type="text" id="hit_depserv9_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d5">
              <input type="text" id="hit_qteserv9_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d5">
              <input type="text" id="hit_depserv10_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d5">
              <input type="text" id="hit_qteserv10_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d5">
              <input type="text" id="hit_depserv11_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d5">
              <input type="text" id="hit_qteserv11_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d5">
              <input type="text" id="hit_depserv12_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d5">
              <input type="text" id="hit_qteserv12_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d5">
              <input type="text" id="hit_depserv13_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d5">
              <input type="text" id="hit_qteserv13_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d5">
              <input type="text" id="hit_depserv14_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d5">
              <input type="text" id="hit_qteserv14_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d5">
              <input type="text" id="hit_depserv15_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d5">
              <input type="text" id="hit_qteserv15_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d5">
              <input type="text" id="hit_depserv16_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d5">
              <input type="text" id="hit_qteserv16_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d5">
              <input type="text" id="hit_depserv17_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d5">
              <input type="text" id="hit_qteserv17_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d5">
              <input type="text" id="hit_depserv18_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d5">
              <input type="text" id="hit_qteserv18_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d5">
              <input type="text" id="hit_depserv19_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d5">
              <input type="text" id="hit_qteserv19_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_5" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d5">
              <input type="text" id="hit_depserv20_5" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d5">
              <input type="text" id="hit_qteserv20_5" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link5" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="81235" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81235-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-bleu-avec-sacoche-offert.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/404194-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-bleu-avec-sacoche-offert.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/404194-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-bleu-avec-sacoche-offert.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/404192-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-bleu-avec-sacoche-offert.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                        </a>
                              <input type="hidden" id="hit_ref6" value="82LX00CKFG-SAC">
          <input type="hidden" id="hit_id6" value="81235">
          <input type="hidden" id="hit_qte6" value="-15">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81235-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-bleu-avec-sacoche-offert.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Bleu Avec SACOCHE Offert</a></h2>
            <span class="product-reference">[82LX00CKFG-SAC]</span>
                  
                
        	<div id="product-description-short-81235" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81235-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-bleu-avec-sacoche-offert.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - <span style="font-size:10pt;color:#d0121a;"><strong>FreeDos</strong></span> - Couleur Bleu abyssal - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an Avec SACOCHE Offert</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt6"></p>
        		<p class="ff_p_field" id="hit_2mvt6"></p>   
            <div id="hit_8lastw6" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w6"></div>
              <div class="ff_div_field" id="hit_8last12w6"></div>
            </div>
            <div id="hit_8lastw6" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w6"></div>
              <div class="ff_div_field" id="hit_8last22w6"></div>
            </div>
            <div id="hit_8lastw6" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w6"></div>
              <div class="ff_div_field" id="hit_8last32w6"></div>
            </div>
            <div id="hit_8lastw6" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w6"></div>
              <div class="ff_div_field" id="hit_8last42w6"></div>
            </div>
            <div id="hit_8lastw6" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w6"></div>
              <div class="ff_div_field" id="hit_8last52w6"></div>
            </div>
            <div id="hit_8lastw6" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w6"></div>
              <div class="ff_div_field" id="hit_8last62w6"></div>
            </div>
            <div id="hit_8lastw6" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w6"></div>
              <div class="ff_div_field" id="hit_8last72w6"></div>
            </div>
            <div id="hit_8lastw6" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w6"></div>
              <div class="ff_div_field" id="hit_8last82w6"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">839,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-15" class="quantity_product quantity_product_81235" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81235" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81235" name="id_product_attribute">
		<input type="hidden" value="81235" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81235" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81235 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81235" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81235" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list hstock" title="Non disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">839,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price6" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-15" class="quantity_product quantity_product_81235" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81235" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81235" name="id_product_attribute">
		<input type="hidden" value="81235" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81235" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81235 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81235" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81235" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv6" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d6">
              <input type="text" id="hit_depserv0_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d6">
              <input type="text" id="hit_qteserv0_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d6">
              <input type="text" id="hit_depserv1_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d6">
              <input type="text" id="hit_qteserv1_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d6">
              <input type="text" id="hit_depserv2_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d6">
              <input type="text" id="hit_qteserv2_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d6">
              <input type="text" id="hit_depserv3_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d6">
              <input type="text" id="hit_qteserv3_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d6">
              <input type="text" id="hit_depserv4_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d6">
              <input type="text" id="hit_qteserv4_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d6">
              <input type="text" id="hit_depserv5_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d6">
              <input type="text" id="hit_qteserv5_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d6">
              <input type="text" id="hit_depserv6_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d6">
              <input type="text" id="hit_qteserv6_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d6">
              <input type="text" id="hit_depserv7_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d6">
              <input type="text" id="hit_qteserv7_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d6">
              <input type="text" id="hit_depserv8_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d6">
              <input type="text" id="hit_qteserv8_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d6">
              <input type="text" id="hit_depserv9_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d6">
              <input type="text" id="hit_qteserv9_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d6">
              <input type="text" id="hit_depserv10_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d6">
              <input type="text" id="hit_qteserv10_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d6">
              <input type="text" id="hit_depserv11_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d6">
              <input type="text" id="hit_qteserv11_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d6">
              <input type="text" id="hit_depserv12_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d6">
              <input type="text" id="hit_qteserv12_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d6">
              <input type="text" id="hit_depserv13_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d6">
              <input type="text" id="hit_qteserv13_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d6">
              <input type="text" id="hit_depserv14_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d6">
              <input type="text" id="hit_qteserv14_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d6">
              <input type="text" id="hit_depserv15_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d6">
              <input type="text" id="hit_qteserv15_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d6">
              <input type="text" id="hit_depserv16_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d6">
              <input type="text" id="hit_qteserv16_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d6">
              <input type="text" id="hit_depserv17_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d6">
              <input type="text" id="hit_qteserv17_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d6">
              <input type="text" id="hit_depserv18_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d6">
              <input type="text" id="hit_qteserv18_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d6">
              <input type="text" id="hit_depserv19_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d6">
              <input type="text" id="hit_qteserv19_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_6" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d6">
              <input type="text" id="hit_depserv20_6" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d6">
              <input type="text" id="hit_qteserv20_6" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link6" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list hstock" title="Non disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="91374" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91374-pc-portable-hp-15-fd0438nk-i3-1315u-8-go-512-go-ssd-noir.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/457199-home/pc-portable-hp-15-fd0438nk-i3-1315u-8-go-512-go-ssd-noir.jpg" title="301" alt="Pc Portable HP 15-fd0592nk..." data-full-size-image-url="https://www.tunisianet.com.tn/457199-large/pc-portable-hp-15-fd0438nk-i3-1315u-8-go-512-go-ssd-noir.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/457197-home/pc-portable-hp-15-fd0438nk-i3-1315u-8-go-512-go-ssd-noir.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                                                       </a>
                              <input type="hidden" id="hit_ref7" value="CB6C9EA">
          <input type="hidden" id="hit_id7" value="91374">
          <input type="hidden" id="hit_qte7" value="-5">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91374-pc-portable-hp-15-fd0438nk-i3-1315u-8-go-512-go-ssd-noir.html">Pc Portable HP 15-fd0592nk / N100  / 8 Go / 256 Go SSD / Noir</a></h2>
            <span class="product-reference">[CB6C9EA]</span>
                  
                
        	<div id="product-description-short-91374" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91374-pc-portable-hp-15-fd0438nk-i3-1315u-8-go-512-go-ssd-noir.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" Full HD (1920 x 1080), micro-bords, antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Core N100 </strong></span>, (jusqu’à 3.4 GHz,&nbsp;6 Mo de mémoire cache) - Mémoire 8 Go DDR4 - Disque SSD NVMe M.2 256 Go - Carte graphique Intel UHD Intégré - Wi-Fi 6 - Bluetooth 5.4 - Clavier noir profond, de grande taille avec pavé numérique - Caméra HP True Vision HD 720p avec réduction temporelle du bruit - Doubles haut-parleurs - 1x port USB Type-C - 2x ports USB Type-A - 1x port HDMI 1.4b - 1x prise combinée casque/microphone - <span style="font-size:10pt;color:#d0121a;"><strong>FreeDOS</strong></span>&nbsp;- Couleur Noir - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an<br><br><br></strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt7"></p>
        		<p class="ff_p_field" id="hit_2mvt7"></p>   
            <div id="hit_8lastw7" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w7"></div>
              <div class="ff_div_field" id="hit_8last12w7"></div>
            </div>
            <div id="hit_8lastw7" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w7"></div>
              <div class="ff_div_field" id="hit_8last22w7"></div>
            </div>
            <div id="hit_8lastw7" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w7"></div>
              <div class="ff_div_field" id="hit_8last32w7"></div>
            </div>
            <div id="hit_8lastw7" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w7"></div>
              <div class="ff_div_field" id="hit_8last42w7"></div>
            </div>
            <div id="hit_8lastw7" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w7"></div>
              <div class="ff_div_field" id="hit_8last52w7"></div>
            </div>
            <div id="hit_8lastw7" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w7"></div>
              <div class="ff_div_field" id="hit_8last62w7"></div>
            </div>
            <div id="hit_8lastw7" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w7"></div>
              <div class="ff_div_field" id="hit_8last72w7"></div>
            </div>
            <div id="hit_8lastw7" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w7"></div>
              <div class="ff_div_field" id="hit_8last82w7"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/6_hp">
                <img src="https://www.tunisianet.com.tn/img/m/6.jpg" class="img img-thumbnail manufacturer-logo" alt="HP">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">849,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-5" class="quantity_product quantity_product_91374" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_91374" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_91374" name="id_product_attribute">
		<input type="hidden" value="91374" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_91374" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_91374 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="91374" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="91374" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/6_hp">
                  <img src="https://www.tunisianet.com.tn/img/m/6.jpg" class="img img-thumbnail manufacturer-logo" alt="HP">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">849,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price7" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-5" class="quantity_product quantity_product_91374" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_91374" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_91374" name="id_product_attribute">
		<input type="hidden" value="91374" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_91374" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_91374 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="91374" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="91374" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv7" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d7">
              <input type="text" id="hit_depserv0_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d7">
              <input type="text" id="hit_qteserv0_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d7">
              <input type="text" id="hit_depserv1_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d7">
              <input type="text" id="hit_qteserv1_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d7">
              <input type="text" id="hit_depserv2_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d7">
              <input type="text" id="hit_qteserv2_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d7">
              <input type="text" id="hit_depserv3_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d7">
              <input type="text" id="hit_qteserv3_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d7">
              <input type="text" id="hit_depserv4_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d7">
              <input type="text" id="hit_qteserv4_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d7">
              <input type="text" id="hit_depserv5_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d7">
              <input type="text" id="hit_qteserv5_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d7">
              <input type="text" id="hit_depserv6_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d7">
              <input type="text" id="hit_qteserv6_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d7">
              <input type="text" id="hit_depserv7_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d7">
              <input type="text" id="hit_qteserv7_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d7">
              <input type="text" id="hit_depserv8_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d7">
              <input type="text" id="hit_qteserv8_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d7">
              <input type="text" id="hit_depserv9_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d7">
              <input type="text" id="hit_qteserv9_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d7">
              <input type="text" id="hit_depserv10_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d7">
              <input type="text" id="hit_qteserv10_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d7">
              <input type="text" id="hit_depserv11_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d7">
              <input type="text" id="hit_qteserv11_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d7">
              <input type="text" id="hit_depserv12_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d7">
              <input type="text" id="hit_qteserv12_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d7">
              <input type="text" id="hit_depserv13_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d7">
              <input type="text" id="hit_qteserv13_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d7">
              <input type="text" id="hit_depserv14_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d7">
              <input type="text" id="hit_qteserv14_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d7">
              <input type="text" id="hit_depserv15_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d7">
              <input type="text" id="hit_qteserv15_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d7">
              <input type="text" id="hit_depserv16_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d7">
              <input type="text" id="hit_qteserv16_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d7">
              <input type="text" id="hit_depserv17_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d7">
              <input type="text" id="hit_qteserv17_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d7">
              <input type="text" id="hit_depserv18_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d7">
              <input type="text" id="hit_qteserv18_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d7">
              <input type="text" id="hit_depserv19_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d7">
              <input type="text" id="hit_qteserv19_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_7" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d7">
              <input type="text" id="hit_depserv20_7" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d7">
              <input type="text" id="hit_qteserv20_7" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link7" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="91695" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91695-pc-portable-hp-15-fd0592nk-n100-4-go-256-go-ssd-bleu-silver.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/459019-home/pc-portable-hp-15-fd0592nk-n100-4-go-256-go-ssd-bleu-silver.jpg" title="301" alt="HP Laptop 15-fd0590nk (CB6C7EA)" data-full-size-image-url="https://www.tunisianet.com.tn/459019-large/pc-portable-hp-15-fd0592nk-n100-4-go-256-go-ssd-bleu-silver.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/459018-home/pc-portable-hp-15-fd0592nk-n100-4-go-256-go-ssd-bleu-silver.jpg" alt="HP 15-fd0590nk (CB6C7EA)" title="HP 15-fd0590nk (CB6C7EA)" itemprop="image" width="250" height="250">
                                                                                                                                                      </a>
                              <input type="hidden" id="hit_ref8" value="CB6C7EA">
          <input type="hidden" id="hit_id8" value="91695">
          <input type="hidden" id="hit_qte8" value="0">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91695-pc-portable-hp-15-fd0592nk-n100-4-go-256-go-ssd-bleu-silver.html">Pc Portable HP 15-fd0592nk / N100  / 4 Go / 256 Go SSD / Bleu &amp; Silver</a></h2>
            <span class="product-reference">[CB6C7EA]</span>
                  
                
        	<div id="product-description-short-91695" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91695-pc-portable-hp-15-fd0592nk-n100-4-go-256-go-ssd-bleu-silver.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" Full HD (1920 x 1080), micro-bords, antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Core N100 </strong></span>, (jusqu’à 3.4 GHz,&nbsp;6 Mo de mémoire cache) - Mémoire&nbsp;4 Go DDR4 - Disque SSD NVMe M.2 256 Go - Carte graphique Intel UHD Intégré - Wi-Fi 6 - Bluetooth 5.4 - Clavier noir profond, de grande taille avec pavé numérique - Caméra HP True Vision HD 720p avec réduction temporelle du bruit - Doubles haut-parleurs - 1x port USB Type-C - 2x ports USB Type-A - 1x port HDMI 1.4b - 1x prise combinée casque/microphone - <span style="font-size:10pt;color:#d0121a;"><strong>Windows 11&nbsp;</strong></span>&nbsp;- Couleur Bleu et Silver - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an<br><br><br></strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt8"></p>
        		<p class="ff_p_field" id="hit_2mvt8"></p>   
            <div id="hit_8lastw8" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w8"></div>
              <div class="ff_div_field" id="hit_8last12w8"></div>
            </div>
            <div id="hit_8lastw8" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w8"></div>
              <div class="ff_div_field" id="hit_8last22w8"></div>
            </div>
            <div id="hit_8lastw8" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w8"></div>
              <div class="ff_div_field" id="hit_8last32w8"></div>
            </div>
            <div id="hit_8lastw8" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w8"></div>
              <div class="ff_div_field" id="hit_8last42w8"></div>
            </div>
            <div id="hit_8lastw8" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w8"></div>
              <div class="ff_div_field" id="hit_8last52w8"></div>
            </div>
            <div id="hit_8lastw8" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w8"></div>
              <div class="ff_div_field" id="hit_8last62w8"></div>
            </div>
            <div id="hit_8lastw8" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w8"></div>
              <div class="ff_div_field" id="hit_8last72w8"></div>
            </div>
            <div id="hit_8lastw8" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w8"></div>
              <div class="ff_div_field" id="hit_8last82w8"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/6_hp">
                <img src="https://www.tunisianet.com.tn/img/m/6.jpg" class="img img-thumbnail manufacturer-logo" alt="HP">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">849,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="0" class="quantity_product quantity_product_91695" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_91695" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_91695" name="id_product_attribute">
		<input type="hidden" value="91695" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_91695" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_91695 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="91695" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="91695" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/6_hp">
                  <img src="https://www.tunisianet.com.tn/img/m/6.jpg" class="img img-thumbnail manufacturer-logo" alt="HP">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">849,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price8" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="0" class="quantity_product quantity_product_91695" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_91695" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_91695" name="id_product_attribute">
		<input type="hidden" value="91695" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_91695" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_91695 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="91695" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="91695" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv8" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d8">
              <input type="text" id="hit_depserv0_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d8">
              <input type="text" id="hit_qteserv0_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d8">
              <input type="text" id="hit_depserv1_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d8">
              <input type="text" id="hit_qteserv1_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d8">
              <input type="text" id="hit_depserv2_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d8">
              <input type="text" id="hit_qteserv2_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d8">
              <input type="text" id="hit_depserv3_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d8">
              <input type="text" id="hit_qteserv3_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d8">
              <input type="text" id="hit_depserv4_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d8">
              <input type="text" id="hit_qteserv4_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d8">
              <input type="text" id="hit_depserv5_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d8">
              <input type="text" id="hit_qteserv5_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d8">
              <input type="text" id="hit_depserv6_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d8">
              <input type="text" id="hit_qteserv6_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d8">
              <input type="text" id="hit_depserv7_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d8">
              <input type="text" id="hit_qteserv7_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d8">
              <input type="text" id="hit_depserv8_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d8">
              <input type="text" id="hit_qteserv8_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d8">
              <input type="text" id="hit_depserv9_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d8">
              <input type="text" id="hit_qteserv9_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d8">
              <input type="text" id="hit_depserv10_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d8">
              <input type="text" id="hit_qteserv10_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d8">
              <input type="text" id="hit_depserv11_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d8">
              <input type="text" id="hit_qteserv11_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d8">
              <input type="text" id="hit_depserv12_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d8">
              <input type="text" id="hit_qteserv12_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d8">
              <input type="text" id="hit_depserv13_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d8">
              <input type="text" id="hit_qteserv13_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d8">
              <input type="text" id="hit_depserv14_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d8">
              <input type="text" id="hit_qteserv14_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d8">
              <input type="text" id="hit_depserv15_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d8">
              <input type="text" id="hit_qteserv15_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d8">
              <input type="text" id="hit_depserv16_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d8">
              <input type="text" id="hit_qteserv16_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d8">
              <input type="text" id="hit_depserv17_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d8">
              <input type="text" id="hit_qteserv17_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d8">
              <input type="text" id="hit_depserv18_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d8">
              <input type="text" id="hit_qteserv18_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d8">
              <input type="text" id="hit_depserv19_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d8">
              <input type="text" id="hit_qteserv19_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_8" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d8">
              <input type="text" id="hit_depserv20_8" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d8">
              <input type="text" id="hit_qteserv20_8" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link8" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="91694" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91694-pc-portable-hp-15-fd0592nk-n100-4-go-256-go-ssd-noir.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/459026-home/pc-portable-hp-15-fd0592nk-n100-4-go-256-go-ssd-noir.jpg" title="301" alt="HP Laptop (CB6C8EA)" data-full-size-image-url="https://www.tunisianet.com.tn/459026-large/pc-portable-hp-15-fd0592nk-n100-4-go-256-go-ssd-noir.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/459025-home/pc-portable-hp-15-fd0592nk-n100-4-go-256-go-ssd-noir.jpg" alt="HP 15-fd0591nk (CB6C8EA)" title="HP 15-fd0591nk (CB6C8EA)" itemprop="image" width="250" height="250">
                                                                                                                                                      </a>
                              <input type="hidden" id="hit_ref9" value="CB6C8EA">
          <input type="hidden" id="hit_id9" value="91694">
          <input type="hidden" id="hit_qte9" value="0">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91694-pc-portable-hp-15-fd0592nk-n100-4-go-256-go-ssd-noir.html">Pc Portable HP 15-fd0592nk / N100  / 4 Go / 256 Go SSD / Noir</a></h2>
            <span class="product-reference">[CB6C8EA]</span>
                  
                
        	<div id="product-description-short-91694" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91694-pc-portable-hp-15-fd0592nk-n100-4-go-256-go-ssd-noir.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" Full HD (1920 x 1080), micro-bords, antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Core N100 </strong></span>, (jusqu’à 3.4 GHz,&nbsp;6 Mo de mémoire cache) - Mémoire&nbsp;4 Go DDR4 - Disque SSD NVMe M.2 256 Go - Carte graphique Intel UHD Intégré - Wi-Fi 6 - Bluetooth 5.4 - Clavier noir profond, de grande taille avec pavé numérique - Caméra HP True Vision HD 720p avec réduction temporelle du bruit - Doubles haut-parleurs - 1x port USB Type-C - 2x ports USB Type-A - 1x port HDMI 1.4b - 1x prise combinée casque/microphone - <span style="font-size:10pt;color:#d0121a;"><strong>Windows 11&nbsp;</strong></span>&nbsp;- Couleur&nbsp;Noir - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an<br><br><br></strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt9"></p>
        		<p class="ff_p_field" id="hit_2mvt9"></p>   
            <div id="hit_8lastw9" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w9"></div>
              <div class="ff_div_field" id="hit_8last12w9"></div>
            </div>
            <div id="hit_8lastw9" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w9"></div>
              <div class="ff_div_field" id="hit_8last22w9"></div>
            </div>
            <div id="hit_8lastw9" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w9"></div>
              <div class="ff_div_field" id="hit_8last32w9"></div>
            </div>
            <div id="hit_8lastw9" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w9"></div>
              <div class="ff_div_field" id="hit_8last42w9"></div>
            </div>
            <div id="hit_8lastw9" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w9"></div>
              <div class="ff_div_field" id="hit_8last52w9"></div>
            </div>
            <div id="hit_8lastw9" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w9"></div>
              <div class="ff_div_field" id="hit_8last62w9"></div>
            </div>
            <div id="hit_8lastw9" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w9"></div>
              <div class="ff_div_field" id="hit_8last72w9"></div>
            </div>
            <div id="hit_8lastw9" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w9"></div>
              <div class="ff_div_field" id="hit_8last82w9"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/6_hp">
                <img src="https://www.tunisianet.com.tn/img/m/6.jpg" class="img img-thumbnail manufacturer-logo" alt="HP">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">849,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="0" class="quantity_product quantity_product_91694" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_91694" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_91694" name="id_product_attribute">
		<input type="hidden" value="91694" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_91694" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_91694 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="91694" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="91694" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/6_hp">
                  <img src="https://www.tunisianet.com.tn/img/m/6.jpg" class="img img-thumbnail manufacturer-logo" alt="HP">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">849,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price9" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="0" class="quantity_product quantity_product_91694" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_91694" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_91694" name="id_product_attribute">
		<input type="hidden" value="91694" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_91694" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_91694 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="91694" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="91694" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv9" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d9">
              <input type="text" id="hit_depserv0_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d9">
              <input type="text" id="hit_qteserv0_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d9">
              <input type="text" id="hit_depserv1_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d9">
              <input type="text" id="hit_qteserv1_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d9">
              <input type="text" id="hit_depserv2_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d9">
              <input type="text" id="hit_qteserv2_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d9">
              <input type="text" id="hit_depserv3_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d9">
              <input type="text" id="hit_qteserv3_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d9">
              <input type="text" id="hit_depserv4_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d9">
              <input type="text" id="hit_qteserv4_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d9">
              <input type="text" id="hit_depserv5_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d9">
              <input type="text" id="hit_qteserv5_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d9">
              <input type="text" id="hit_depserv6_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d9">
              <input type="text" id="hit_qteserv6_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d9">
              <input type="text" id="hit_depserv7_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d9">
              <input type="text" id="hit_qteserv7_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d9">
              <input type="text" id="hit_depserv8_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d9">
              <input type="text" id="hit_qteserv8_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d9">
              <input type="text" id="hit_depserv9_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d9">
              <input type="text" id="hit_qteserv9_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d9">
              <input type="text" id="hit_depserv10_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d9">
              <input type="text" id="hit_qteserv10_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d9">
              <input type="text" id="hit_depserv11_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d9">
              <input type="text" id="hit_qteserv11_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d9">
              <input type="text" id="hit_depserv12_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d9">
              <input type="text" id="hit_qteserv12_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d9">
              <input type="text" id="hit_depserv13_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d9">
              <input type="text" id="hit_qteserv13_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d9">
              <input type="text" id="hit_depserv14_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d9">
              <input type="text" id="hit_qteserv14_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d9">
              <input type="text" id="hit_depserv15_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d9">
              <input type="text" id="hit_qteserv15_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d9">
              <input type="text" id="hit_depserv16_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d9">
              <input type="text" id="hit_qteserv16_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d9">
              <input type="text" id="hit_depserv17_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d9">
              <input type="text" id="hit_qteserv17_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d9">
              <input type="text" id="hit_depserv18_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d9">
              <input type="text" id="hit_qteserv18_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d9">
              <input type="text" id="hit_depserv19_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d9">
              <input type="text" id="hit_qteserv19_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_9" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d9">
              <input type="text" id="hit_depserv20_9" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d9">
              <input type="text" id="hit_qteserv20_9" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link9" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="89805" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/89805-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/448991-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/448991-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/448991-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                        </a>
                              <input type="hidden" id="hit_ref10" value="82LX00G4FG-2Y">
          <input type="hidden" id="hit_id10" value="89805">
          <input type="hidden" id="hit_qte10" value="-6">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/89805-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Gris</a></h2>
            <span class="product-reference">[82LX00G4FG-2Y]</span>
                  
                
        	<div id="product-description-short-89805" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/89805-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) &nbsp;- Couleur Gris nuage - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie&nbsp;2 ans</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt10"></p>
        		<p class="ff_p_field" id="hit_2mvt10"></p>   
            <div id="hit_8lastw10" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w10"></div>
              <div class="ff_div_field" id="hit_8last12w10"></div>
            </div>
            <div id="hit_8lastw10" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w10"></div>
              <div class="ff_div_field" id="hit_8last22w10"></div>
            </div>
            <div id="hit_8lastw10" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w10"></div>
              <div class="ff_div_field" id="hit_8last32w10"></div>
            </div>
            <div id="hit_8lastw10" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w10"></div>
              <div class="ff_div_field" id="hit_8last42w10"></div>
            </div>
            <div id="hit_8lastw10" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w10"></div>
              <div class="ff_div_field" id="hit_8last52w10"></div>
            </div>
            <div id="hit_8lastw10" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w10"></div>
              <div class="ff_div_field" id="hit_8last62w10"></div>
            </div>
            <div id="hit_8lastw10" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w10"></div>
              <div class="ff_div_field" id="hit_8last72w10"></div>
            </div>
            <div id="hit_8lastw10" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w10"></div>
              <div class="ff_div_field" id="hit_8last82w10"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">849,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-6" class="quantity_product quantity_product_89805" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_89805" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_89805" name="id_product_attribute">
		<input type="hidden" value="89805" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_89805" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_89805 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="89805" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="89805" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list stock" title="Disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">849,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price10" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-6" class="quantity_product quantity_product_89805" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_89805" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_89805" name="id_product_attribute">
		<input type="hidden" value="89805" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_89805" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_89805 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="89805" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="89805" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv10" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d10">
              <input type="text" id="hit_depserv0_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d10">
              <input type="text" id="hit_qteserv0_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d10">
              <input type="text" id="hit_depserv1_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d10">
              <input type="text" id="hit_qteserv1_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d10">
              <input type="text" id="hit_depserv2_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d10">
              <input type="text" id="hit_qteserv2_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d10">
              <input type="text" id="hit_depserv3_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d10">
              <input type="text" id="hit_qteserv3_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d10">
              <input type="text" id="hit_depserv4_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d10">
              <input type="text" id="hit_qteserv4_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d10">
              <input type="text" id="hit_depserv5_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d10">
              <input type="text" id="hit_qteserv5_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d10">
              <input type="text" id="hit_depserv6_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d10">
              <input type="text" id="hit_qteserv6_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d10">
              <input type="text" id="hit_depserv7_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d10">
              <input type="text" id="hit_qteserv7_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d10">
              <input type="text" id="hit_depserv8_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d10">
              <input type="text" id="hit_qteserv8_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d10">
              <input type="text" id="hit_depserv9_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d10">
              <input type="text" id="hit_qteserv9_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d10">
              <input type="text" id="hit_depserv10_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d10">
              <input type="text" id="hit_qteserv10_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d10">
              <input type="text" id="hit_depserv11_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d10">
              <input type="text" id="hit_qteserv11_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d10">
              <input type="text" id="hit_depserv12_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d10">
              <input type="text" id="hit_qteserv12_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d10">
              <input type="text" id="hit_depserv13_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d10">
              <input type="text" id="hit_qteserv13_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d10">
              <input type="text" id="hit_depserv14_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d10">
              <input type="text" id="hit_qteserv14_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d10">
              <input type="text" id="hit_depserv15_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d10">
              <input type="text" id="hit_qteserv15_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d10">
              <input type="text" id="hit_depserv16_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d10">
              <input type="text" id="hit_qteserv16_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d10">
              <input type="text" id="hit_depserv17_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d10">
              <input type="text" id="hit_qteserv17_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d10">
              <input type="text" id="hit_depserv18_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d10">
              <input type="text" id="hit_qteserv18_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d10">
              <input type="text" id="hit_depserv19_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d10">
              <input type="text" id="hit_qteserv19_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_10" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d10">
              <input type="text" id="hit_depserv20_10" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d10">
              <input type="text" id="hit_qteserv20_10" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link10" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list stock" title="Disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="91102" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91102-pc-portable-hp-15-fd0421nk-n100-4-go-256-go-ssd-windows-11-pro-noir.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/455881-home/pc-portable-hp-15-fd0421nk-n100-4-go-256-go-ssd-windows-11-pro-noir.jpg" title="301" alt="Pc Portable HP 15-fd0421nk..." data-full-size-image-url="https://www.tunisianet.com.tn/455881-large/pc-portable-hp-15-fd0421nk-n100-4-go-256-go-ssd-windows-11-pro-noir.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/455879-home/pc-portable-hp-15-fd0421nk-n100-4-go-256-go-ssd-windows-11-pro-noir.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                                                       </a>
                              <input type="hidden" id="hit_ref11" value="BU8T3EA-W11P">
          <input type="hidden" id="hit_id11" value="91102">
          <input type="hidden" id="hit_qte11" value="-2">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91102-pc-portable-hp-15-fd0421nk-n100-4-go-256-go-ssd-windows-11-pro-noir.html">Pc Portable HP 15-fd0421nk / N100 / 4 Go / 256 Go SSD / Windows 11 Pro / Noir</a></h2>
            <span class="product-reference">[BU8T3EA-W11P]</span>
                  
                
        	<div id="product-description-short-91102" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91102-pc-portable-hp-15-fd0421nk-n100-4-go-256-go-ssd-windows-11-pro-noir.html">
            	Écran 15.6" HD (1366 x 768), antireflet - Processeur Intel N100, (jusqu'à 3.4 GHz, 6 Mo de mémoire cache) - Mémoire 4 Go DDR4 - Disque SSD M.2 NVMe 256 Go - Carte graphique Intel UHD intégrée - Wi-Fi 6 - Bluetooth 5.4 - Clavier noir profond, de grande taille avec pavé numérique - Caméra HP True Vision HD 720p - Doubles haut-parleurs - 1x port USB Type-C - 2x ports USB Type-A - 1x port HDMI 1.4b - 1x prise combinée casque/microphone - <span style="font-size:10pt;color:#d0121a;"><strong>Windows 11 Pro</strong></span>&nbsp;- Couleur Noir - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt11"></p>
        		<p class="ff_p_field" id="hit_2mvt11"></p>   
            <div id="hit_8lastw11" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w11"></div>
              <div class="ff_div_field" id="hit_8last12w11"></div>
            </div>
            <div id="hit_8lastw11" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w11"></div>
              <div class="ff_div_field" id="hit_8last22w11"></div>
            </div>
            <div id="hit_8lastw11" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w11"></div>
              <div class="ff_div_field" id="hit_8last32w11"></div>
            </div>
            <div id="hit_8lastw11" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w11"></div>
              <div class="ff_div_field" id="hit_8last42w11"></div>
            </div>
            <div id="hit_8lastw11" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w11"></div>
              <div class="ff_div_field" id="hit_8last52w11"></div>
            </div>
            <div id="hit_8lastw11" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w11"></div>
              <div class="ff_div_field" id="hit_8last62w11"></div>
            </div>
            <div id="hit_8lastw11" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w11"></div>
              <div class="ff_div_field" id="hit_8last72w11"></div>
            </div>
            <div id="hit_8lastw11" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w11"></div>
              <div class="ff_div_field" id="hit_8last82w11"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/6_hp">
                <img src="https://www.tunisianet.com.tn/img/m/6.jpg" class="img img-thumbnail manufacturer-logo" alt="HP">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">859,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-2" class="quantity_product quantity_product_91102" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_91102" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_91102" name="id_product_attribute">
		<input type="hidden" value="91102" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_91102" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_91102 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="91102" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="91102" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/6_hp">
                  <img src="https://www.tunisianet.com.tn/img/m/6.jpg" class="img img-thumbnail manufacturer-logo" alt="HP">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">859,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price11" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-2" class="quantity_product quantity_product_91102" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_91102" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_91102" name="id_product_attribute">
		<input type="hidden" value="91102" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_91102" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_91102 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="91102" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="91102" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv11" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d11">
              <input type="text" id="hit_depserv0_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d11">
              <input type="text" id="hit_qteserv0_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d11">
              <input type="text" id="hit_depserv1_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d11">
              <input type="text" id="hit_qteserv1_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d11">
              <input type="text" id="hit_depserv2_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d11">
              <input type="text" id="hit_qteserv2_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d11">
              <input type="text" id="hit_depserv3_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d11">
              <input type="text" id="hit_qteserv3_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d11">
              <input type="text" id="hit_depserv4_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d11">
              <input type="text" id="hit_qteserv4_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d11">
              <input type="text" id="hit_depserv5_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d11">
              <input type="text" id="hit_qteserv5_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d11">
              <input type="text" id="hit_depserv6_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d11">
              <input type="text" id="hit_qteserv6_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d11">
              <input type="text" id="hit_depserv7_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d11">
              <input type="text" id="hit_qteserv7_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d11">
              <input type="text" id="hit_depserv8_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d11">
              <input type="text" id="hit_qteserv8_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d11">
              <input type="text" id="hit_depserv9_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d11">
              <input type="text" id="hit_qteserv9_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d11">
              <input type="text" id="hit_depserv10_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d11">
              <input type="text" id="hit_qteserv10_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d11">
              <input type="text" id="hit_depserv11_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d11">
              <input type="text" id="hit_qteserv11_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d11">
              <input type="text" id="hit_depserv12_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d11">
              <input type="text" id="hit_qteserv12_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d11">
              <input type="text" id="hit_depserv13_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d11">
              <input type="text" id="hit_qteserv13_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d11">
              <input type="text" id="hit_depserv14_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d11">
              <input type="text" id="hit_qteserv14_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d11">
              <input type="text" id="hit_depserv15_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d11">
              <input type="text" id="hit_qteserv15_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d11">
              <input type="text" id="hit_depserv16_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d11">
              <input type="text" id="hit_qteserv16_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d11">
              <input type="text" id="hit_depserv17_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d11">
              <input type="text" id="hit_qteserv17_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d11">
              <input type="text" id="hit_depserv18_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d11">
              <input type="text" id="hit_qteserv18_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d11">
              <input type="text" id="hit_depserv19_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d11">
              <input type="text" id="hit_qteserv19_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_11" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d11">
              <input type="text" id="hit_depserv20_11" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d11">
              <input type="text" id="hit_qteserv20_11" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link11" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="89843" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/89843-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris-avec-sacoche-offerte.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/449241-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris-avec-sacoche-offerte.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/449241-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris-avec-sacoche-offerte.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/449241-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris-avec-sacoche-offerte.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                        </a>
                              <input type="hidden" id="hit_ref12" value="82LX00G4FG-2Y-SAC">
          <input type="hidden" id="hit_id12" value="89843">
          <input type="hidden" id="hit_qte12" value="0">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/89843-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris-avec-sacoche-offerte.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Gris Avec Sacoche Offerte</a></h2>
            <span class="product-reference">[82LX00G4FG-2Y-SAC]</span>
                  
                
        	<div id="product-description-short-89843" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/89843-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris-avec-sacoche-offerte.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) &nbsp;- Couleur Gris nuage - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie&nbsp;2 ans Avec Sacoche Offerte</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt12"></p>
        		<p class="ff_p_field" id="hit_2mvt12"></p>   
            <div id="hit_8lastw12" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w12"></div>
              <div class="ff_div_field" id="hit_8last12w12"></div>
            </div>
            <div id="hit_8lastw12" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w12"></div>
              <div class="ff_div_field" id="hit_8last22w12"></div>
            </div>
            <div id="hit_8lastw12" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w12"></div>
              <div class="ff_div_field" id="hit_8last32w12"></div>
            </div>
            <div id="hit_8lastw12" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w12"></div>
              <div class="ff_div_field" id="hit_8last42w12"></div>
            </div>
            <div id="hit_8lastw12" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w12"></div>
              <div class="ff_div_field" id="hit_8last52w12"></div>
            </div>
            <div id="hit_8lastw12" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w12"></div>
              <div class="ff_div_field" id="hit_8last62w12"></div>
            </div>
            <div id="hit_8lastw12" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w12"></div>
              <div class="ff_div_field" id="hit_8last72w12"></div>
            </div>
            <div id="hit_8lastw12" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w12"></div>
              <div class="ff_div_field" id="hit_8last82w12"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">859,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="0" class="quantity_product quantity_product_89843" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_89843" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_89843" name="id_product_attribute">
		<input type="hidden" value="89843" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_89843" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_89843 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="89843" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="89843" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list hstock" title="Non disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list hstock" title="Non disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">859,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price12" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="0" class="quantity_product quantity_product_89843" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_89843" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_89843" name="id_product_attribute">
		<input type="hidden" value="89843" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_89843" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_89843 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="89843" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="89843" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv12" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d12">
              <input type="text" id="hit_depserv0_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d12">
              <input type="text" id="hit_qteserv0_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d12">
              <input type="text" id="hit_depserv1_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d12">
              <input type="text" id="hit_qteserv1_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d12">
              <input type="text" id="hit_depserv2_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d12">
              <input type="text" id="hit_qteserv2_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d12">
              <input type="text" id="hit_depserv3_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d12">
              <input type="text" id="hit_qteserv3_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d12">
              <input type="text" id="hit_depserv4_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d12">
              <input type="text" id="hit_qteserv4_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d12">
              <input type="text" id="hit_depserv5_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d12">
              <input type="text" id="hit_qteserv5_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d12">
              <input type="text" id="hit_depserv6_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d12">
              <input type="text" id="hit_qteserv6_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d12">
              <input type="text" id="hit_depserv7_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d12">
              <input type="text" id="hit_qteserv7_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d12">
              <input type="text" id="hit_depserv8_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d12">
              <input type="text" id="hit_qteserv8_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d12">
              <input type="text" id="hit_depserv9_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d12">
              <input type="text" id="hit_qteserv9_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d12">
              <input type="text" id="hit_depserv10_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d12">
              <input type="text" id="hit_qteserv10_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d12">
              <input type="text" id="hit_depserv11_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d12">
              <input type="text" id="hit_qteserv11_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d12">
              <input type="text" id="hit_depserv12_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d12">
              <input type="text" id="hit_qteserv12_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d12">
              <input type="text" id="hit_depserv13_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d12">
              <input type="text" id="hit_qteserv13_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d12">
              <input type="text" id="hit_depserv14_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d12">
              <input type="text" id="hit_qteserv14_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d12">
              <input type="text" id="hit_depserv15_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d12">
              <input type="text" id="hit_qteserv15_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d12">
              <input type="text" id="hit_depserv16_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d12">
              <input type="text" id="hit_qteserv16_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d12">
              <input type="text" id="hit_depserv17_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d12">
              <input type="text" id="hit_qteserv17_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d12">
              <input type="text" id="hit_depserv18_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d12">
              <input type="text" id="hit_qteserv18_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d12">
              <input type="text" id="hit_depserv19_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d12">
              <input type="text" id="hit_qteserv19_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_12" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d12">
              <input type="text" id="hit_depserv20_12" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d12">
              <input type="text" id="hit_qteserv20_12" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link12" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list hstock" title="Non disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list hstock" title="Non disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="81869" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81869-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/407706-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/407706-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/407706-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                        </a>
                              <input type="hidden" id="hit_ref13" value="82LX00CEFG">
          <input type="hidden" id="hit_id13" value="81869">
          <input type="hidden" id="hit_qte13" value="-18">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81869-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Windows 11 / Gris</a></h2>
            <span class="product-reference">[82LX00CEFG]</span>
                  
                
        	<div id="product-description-short-81869" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81869-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - <span style="font-size:10pt;color:#d0121a;"><strong>Windows 11</strong></span>&nbsp;- Couleur Gris nuage - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt13"></p>
        		<p class="ff_p_field" id="hit_2mvt13"></p>   
            <div id="hit_8lastw13" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w13"></div>
              <div class="ff_div_field" id="hit_8last12w13"></div>
            </div>
            <div id="hit_8lastw13" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w13"></div>
              <div class="ff_div_field" id="hit_8last22w13"></div>
            </div>
            <div id="hit_8lastw13" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w13"></div>
              <div class="ff_div_field" id="hit_8last32w13"></div>
            </div>
            <div id="hit_8lastw13" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w13"></div>
              <div class="ff_div_field" id="hit_8last42w13"></div>
            </div>
            <div id="hit_8lastw13" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w13"></div>
              <div class="ff_div_field" id="hit_8last52w13"></div>
            </div>
            <div id="hit_8lastw13" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w13"></div>
              <div class="ff_div_field" id="hit_8last62w13"></div>
            </div>
            <div id="hit_8lastw13" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w13"></div>
              <div class="ff_div_field" id="hit_8last72w13"></div>
            </div>
            <div id="hit_8lastw13" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w13"></div>
              <div class="ff_div_field" id="hit_8last82w13"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">869,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-18" class="quantity_product quantity_product_81869" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81869" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81869" name="id_product_attribute">
		<input type="hidden" value="81869" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81869" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81869 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81869" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81869" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">869,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price13" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-18" class="quantity_product quantity_product_81869" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81869" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81869" name="id_product_attribute">
		<input type="hidden" value="81869" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81869" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81869 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81869" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81869" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv13" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d13">
              <input type="text" id="hit_depserv0_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d13">
              <input type="text" id="hit_qteserv0_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d13">
              <input type="text" id="hit_depserv1_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d13">
              <input type="text" id="hit_qteserv1_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d13">
              <input type="text" id="hit_depserv2_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d13">
              <input type="text" id="hit_qteserv2_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d13">
              <input type="text" id="hit_depserv3_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d13">
              <input type="text" id="hit_qteserv3_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d13">
              <input type="text" id="hit_depserv4_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d13">
              <input type="text" id="hit_qteserv4_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d13">
              <input type="text" id="hit_depserv5_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d13">
              <input type="text" id="hit_qteserv5_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d13">
              <input type="text" id="hit_depserv6_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d13">
              <input type="text" id="hit_qteserv6_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d13">
              <input type="text" id="hit_depserv7_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d13">
              <input type="text" id="hit_qteserv7_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d13">
              <input type="text" id="hit_depserv8_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d13">
              <input type="text" id="hit_qteserv8_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d13">
              <input type="text" id="hit_depserv9_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d13">
              <input type="text" id="hit_qteserv9_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d13">
              <input type="text" id="hit_depserv10_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d13">
              <input type="text" id="hit_qteserv10_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d13">
              <input type="text" id="hit_depserv11_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d13">
              <input type="text" id="hit_qteserv11_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d13">
              <input type="text" id="hit_depserv12_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d13">
              <input type="text" id="hit_qteserv12_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d13">
              <input type="text" id="hit_depserv13_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d13">
              <input type="text" id="hit_qteserv13_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d13">
              <input type="text" id="hit_depserv14_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d13">
              <input type="text" id="hit_qteserv14_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d13">
              <input type="text" id="hit_depserv15_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d13">
              <input type="text" id="hit_qteserv15_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d13">
              <input type="text" id="hit_depserv16_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d13">
              <input type="text" id="hit_qteserv16_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d13">
              <input type="text" id="hit_depserv17_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d13">
              <input type="text" id="hit_qteserv17_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d13">
              <input type="text" id="hit_depserv18_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d13">
              <input type="text" id="hit_qteserv18_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d13">
              <input type="text" id="hit_depserv19_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d13">
              <input type="text" id="hit_qteserv19_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_13" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d13">
              <input type="text" id="hit_depserv20_13" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d13">
              <input type="text" id="hit_qteserv20_13" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link13" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="88206" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/88206-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/440551-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/440551-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/440550-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                        </a>
                              <input type="hidden" id="hit_ref14" value="82LX00ECFG">
          <input type="hidden" id="hit_id14" value="88206">
          <input type="hidden" id="hit_qte14" value="-4">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/88206-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Gris</a></h2>
            <span class="product-reference">[82LX00ECFG]</span>
                  
                
        	<div id="product-description-short-88206" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/88206-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-gris.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - <span style="font-size:10pt;color:#d0121a;"><strong>FreeDos</strong></span>&nbsp;- Couleur&nbsp;Gris - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an Avec Sacoche Lenovo</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt14"></p>
        		<p class="ff_p_field" id="hit_2mvt14"></p>   
            <div id="hit_8lastw14" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w14"></div>
              <div class="ff_div_field" id="hit_8last12w14"></div>
            </div>
            <div id="hit_8lastw14" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w14"></div>
              <div class="ff_div_field" id="hit_8last22w14"></div>
            </div>
            <div id="hit_8lastw14" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w14"></div>
              <div class="ff_div_field" id="hit_8last32w14"></div>
            </div>
            <div id="hit_8lastw14" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w14"></div>
              <div class="ff_div_field" id="hit_8last42w14"></div>
            </div>
            <div id="hit_8lastw14" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w14"></div>
              <div class="ff_div_field" id="hit_8last52w14"></div>
            </div>
            <div id="hit_8lastw14" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w14"></div>
              <div class="ff_div_field" id="hit_8last62w14"></div>
            </div>
            <div id="hit_8lastw14" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w14"></div>
              <div class="ff_div_field" id="hit_8last72w14"></div>
            </div>
            <div id="hit_8lastw14" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w14"></div>
              <div class="ff_div_field" id="hit_8last82w14"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">869,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-4" class="quantity_product quantity_product_88206" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_88206" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_88206" name="id_product_attribute">
		<input type="hidden" value="88206" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_88206" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_88206 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="88206" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="88206" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list stock" title="Disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list hstock" title="Non disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">869,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price14" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-4" class="quantity_product quantity_product_88206" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_88206" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_88206" name="id_product_attribute">
		<input type="hidden" value="88206" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_88206" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_88206 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="88206" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="88206" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv14" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d14">
              <input type="text" id="hit_depserv0_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d14">
              <input type="text" id="hit_qteserv0_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d14">
              <input type="text" id="hit_depserv1_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d14">
              <input type="text" id="hit_qteserv1_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d14">
              <input type="text" id="hit_depserv2_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d14">
              <input type="text" id="hit_qteserv2_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d14">
              <input type="text" id="hit_depserv3_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d14">
              <input type="text" id="hit_qteserv3_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d14">
              <input type="text" id="hit_depserv4_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d14">
              <input type="text" id="hit_qteserv4_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d14">
              <input type="text" id="hit_depserv5_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d14">
              <input type="text" id="hit_qteserv5_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d14">
              <input type="text" id="hit_depserv6_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d14">
              <input type="text" id="hit_qteserv6_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d14">
              <input type="text" id="hit_depserv7_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d14">
              <input type="text" id="hit_qteserv7_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d14">
              <input type="text" id="hit_depserv8_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d14">
              <input type="text" id="hit_qteserv8_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d14">
              <input type="text" id="hit_depserv9_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d14">
              <input type="text" id="hit_qteserv9_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d14">
              <input type="text" id="hit_depserv10_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d14">
              <input type="text" id="hit_qteserv10_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d14">
              <input type="text" id="hit_depserv11_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d14">
              <input type="text" id="hit_qteserv11_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d14">
              <input type="text" id="hit_depserv12_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d14">
              <input type="text" id="hit_qteserv12_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d14">
              <input type="text" id="hit_depserv13_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d14">
              <input type="text" id="hit_qteserv13_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d14">
              <input type="text" id="hit_depserv14_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d14">
              <input type="text" id="hit_qteserv14_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d14">
              <input type="text" id="hit_depserv15_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d14">
              <input type="text" id="hit_qteserv15_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d14">
              <input type="text" id="hit_depserv16_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d14">
              <input type="text" id="hit_qteserv16_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d14">
              <input type="text" id="hit_depserv17_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d14">
              <input type="text" id="hit_qteserv17_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d14">
              <input type="text" id="hit_depserv18_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d14">
              <input type="text" id="hit_qteserv18_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d14">
              <input type="text" id="hit_depserv19_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d14">
              <input type="text" id="hit_qteserv19_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_14" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d14">
              <input type="text" id="hit_depserv20_14" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d14">
              <input type="text" id="hit_qteserv20_14" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link14" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list stock" title="Disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list hstock" title="Non disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="85752" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/85752-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-bleu.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/428262-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-bleu.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/428262-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-bleu.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/428258-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-bleu.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                                                                                      </a>
                              <input type="hidden" id="hit_ref15" value="82LX00CDFG">
          <input type="hidden" id="hit_id15" value="85752">
          <input type="hidden" id="hit_qte15" value="-9">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/85752-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-bleu.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Windows 11 / Bleu</a></h2>
            <span class="product-reference">[82LX00CDFG]</span>
                  
                
        	<div id="product-description-short-85752" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/85752-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-bleu.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - <span style="font-size:10pt;color:#d0121a;"><strong>Windows 11</strong></span>&nbsp;- Couleur&nbsp;Bleu - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt15"></p>
        		<p class="ff_p_field" id="hit_2mvt15"></p>   
            <div id="hit_8lastw15" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w15"></div>
              <div class="ff_div_field" id="hit_8last12w15"></div>
            </div>
            <div id="hit_8lastw15" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w15"></div>
              <div class="ff_div_field" id="hit_8last22w15"></div>
            </div>
            <div id="hit_8lastw15" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w15"></div>
              <div class="ff_div_field" id="hit_8last32w15"></div>
            </div>
            <div id="hit_8lastw15" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w15"></div>
              <div class="ff_div_field" id="hit_8last42w15"></div>
            </div>
            <div id="hit_8lastw15" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w15"></div>
              <div class="ff_div_field" id="hit_8last52w15"></div>
            </div>
            <div id="hit_8lastw15" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w15"></div>
              <div class="ff_div_field" id="hit_8last62w15"></div>
            </div>
            <div id="hit_8lastw15" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w15"></div>
              <div class="ff_div_field" id="hit_8last72w15"></div>
            </div>
            <div id="hit_8lastw15" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w15"></div>
              <div class="ff_div_field" id="hit_8last82w15"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">869,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-9" class="quantity_product quantity_product_85752" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_85752" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_85752" name="id_product_attribute">
		<input type="hidden" value="85752" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_85752" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_85752 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="85752" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="85752" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">869,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price15" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-9" class="quantity_product quantity_product_85752" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_85752" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_85752" name="id_product_attribute">
		<input type="hidden" value="85752" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_85752" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_85752 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="85752" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="85752" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv15" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d15">
              <input type="text" id="hit_depserv0_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d15">
              <input type="text" id="hit_qteserv0_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d15">
              <input type="text" id="hit_depserv1_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d15">
              <input type="text" id="hit_qteserv1_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d15">
              <input type="text" id="hit_depserv2_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d15">
              <input type="text" id="hit_qteserv2_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d15">
              <input type="text" id="hit_depserv3_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d15">
              <input type="text" id="hit_qteserv3_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d15">
              <input type="text" id="hit_depserv4_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d15">
              <input type="text" id="hit_qteserv4_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d15">
              <input type="text" id="hit_depserv5_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d15">
              <input type="text" id="hit_qteserv5_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d15">
              <input type="text" id="hit_depserv6_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d15">
              <input type="text" id="hit_qteserv6_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d15">
              <input type="text" id="hit_depserv7_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d15">
              <input type="text" id="hit_qteserv7_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d15">
              <input type="text" id="hit_depserv8_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d15">
              <input type="text" id="hit_qteserv8_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d15">
              <input type="text" id="hit_depserv9_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d15">
              <input type="text" id="hit_qteserv9_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d15">
              <input type="text" id="hit_depserv10_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d15">
              <input type="text" id="hit_qteserv10_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d15">
              <input type="text" id="hit_depserv11_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d15">
              <input type="text" id="hit_qteserv11_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d15">
              <input type="text" id="hit_depserv12_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d15">
              <input type="text" id="hit_qteserv12_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d15">
              <input type="text" id="hit_depserv13_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d15">
              <input type="text" id="hit_qteserv13_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d15">
              <input type="text" id="hit_depserv14_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d15">
              <input type="text" id="hit_qteserv14_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d15">
              <input type="text" id="hit_depserv15_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d15">
              <input type="text" id="hit_qteserv15_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d15">
              <input type="text" id="hit_depserv16_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d15">
              <input type="text" id="hit_qteserv16_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d15">
              <input type="text" id="hit_depserv17_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d15">
              <input type="text" id="hit_qteserv17_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d15">
              <input type="text" id="hit_depserv18_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d15">
              <input type="text" id="hit_qteserv18_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d15">
              <input type="text" id="hit_depserv19_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d15">
              <input type="text" id="hit_qteserv19_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_15" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d15">
              <input type="text" id="hit_depserv20_15" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d15">
              <input type="text" id="hit_qteserv20_15" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link15" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="81236" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81236-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-bleu.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/404195-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-bleu.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/404195-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-bleu.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/404196-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-bleu.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                         </a>
                              <input type="hidden" id="hit_ref16" value="82LX00CKFG-W11P">
          <input type="hidden" id="hit_id16" value="81236">
          <input type="hidden" id="hit_qte16" value="0">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81236-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-bleu.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Windows 11 Pro / Bleu</a></h2>
            <span class="product-reference">[82LX00CKFG-W11P]</span>
                  
                
        	<div id="product-description-short-81236" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81236-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-bleu.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - <span style="font-size:10pt;color:#d0121a;"><strong>Windows 11 Pro</strong></span> - Couleur Bleu abyssal - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt16"></p>
        		<p class="ff_p_field" id="hit_2mvt16"></p>   
            <div id="hit_8lastw16" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w16"></div>
              <div class="ff_div_field" id="hit_8last12w16"></div>
            </div>
            <div id="hit_8lastw16" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w16"></div>
              <div class="ff_div_field" id="hit_8last22w16"></div>
            </div>
            <div id="hit_8lastw16" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w16"></div>
              <div class="ff_div_field" id="hit_8last32w16"></div>
            </div>
            <div id="hit_8lastw16" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w16"></div>
              <div class="ff_div_field" id="hit_8last42w16"></div>
            </div>
            <div id="hit_8lastw16" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w16"></div>
              <div class="ff_div_field" id="hit_8last52w16"></div>
            </div>
            <div id="hit_8lastw16" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w16"></div>
              <div class="ff_div_field" id="hit_8last62w16"></div>
            </div>
            <div id="hit_8lastw16" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w16"></div>
              <div class="ff_div_field" id="hit_8last72w16"></div>
            </div>
            <div id="hit_8lastw16" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w16"></div>
              <div class="ff_div_field" id="hit_8last82w16"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">879,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="0" class="quantity_product quantity_product_81236" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81236" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81236" name="id_product_attribute">
		<input type="hidden" value="81236" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81236" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81236 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81236" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81236" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">879,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price16" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="0" class="quantity_product quantity_product_81236" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81236" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81236" name="id_product_attribute">
		<input type="hidden" value="81236" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81236" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81236 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81236" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81236" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv16" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d16">
              <input type="text" id="hit_depserv0_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d16">
              <input type="text" id="hit_qteserv0_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d16">
              <input type="text" id="hit_depserv1_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d16">
              <input type="text" id="hit_qteserv1_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d16">
              <input type="text" id="hit_depserv2_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d16">
              <input type="text" id="hit_qteserv2_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d16">
              <input type="text" id="hit_depserv3_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d16">
              <input type="text" id="hit_qteserv3_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d16">
              <input type="text" id="hit_depserv4_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d16">
              <input type="text" id="hit_qteserv4_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d16">
              <input type="text" id="hit_depserv5_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d16">
              <input type="text" id="hit_qteserv5_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d16">
              <input type="text" id="hit_depserv6_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d16">
              <input type="text" id="hit_qteserv6_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d16">
              <input type="text" id="hit_depserv7_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d16">
              <input type="text" id="hit_qteserv7_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d16">
              <input type="text" id="hit_depserv8_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d16">
              <input type="text" id="hit_qteserv8_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d16">
              <input type="text" id="hit_depserv9_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d16">
              <input type="text" id="hit_qteserv9_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d16">
              <input type="text" id="hit_depserv10_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d16">
              <input type="text" id="hit_qteserv10_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d16">
              <input type="text" id="hit_depserv11_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d16">
              <input type="text" id="hit_qteserv11_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d16">
              <input type="text" id="hit_depserv12_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d16">
              <input type="text" id="hit_qteserv12_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d16">
              <input type="text" id="hit_depserv13_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d16">
              <input type="text" id="hit_qteserv13_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d16">
              <input type="text" id="hit_depserv14_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d16">
              <input type="text" id="hit_qteserv14_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d16">
              <input type="text" id="hit_depserv15_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d16">
              <input type="text" id="hit_qteserv15_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d16">
              <input type="text" id="hit_depserv16_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d16">
              <input type="text" id="hit_qteserv16_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d16">
              <input type="text" id="hit_depserv17_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d16">
              <input type="text" id="hit_qteserv17_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d16">
              <input type="text" id="hit_depserv18_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d16">
              <input type="text" id="hit_qteserv18_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d16">
              <input type="text" id="hit_depserv19_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d16">
              <input type="text" id="hit_qteserv19_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_16" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d16">
              <input type="text" id="hit_depserv20_16" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d16">
              <input type="text" id="hit_qteserv20_16" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link16" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="81233" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81233-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/404185-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/404185-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/404186-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                        </a>
                              <input type="hidden" id="hit_ref17" value="82LX00CFFG-W11P">
          <input type="hidden" id="hit_id17" value="81233">
          <input type="hidden" id="hit_qte17" value="-3">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81233-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Windows 11 Pro / Gris</a></h2>
            <span class="product-reference">[82LX00CFFG-W11P]</span>
                  
                
        	<div id="product-description-short-81233" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81233-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - <span style="font-size:10pt;color:#d0121a;"><strong>Windows 11 Pro</strong></span> - Couleur Gris nuage - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt17"></p>
        		<p class="ff_p_field" id="hit_2mvt17"></p>   
            <div id="hit_8lastw17" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w17"></div>
              <div class="ff_div_field" id="hit_8last12w17"></div>
            </div>
            <div id="hit_8lastw17" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w17"></div>
              <div class="ff_div_field" id="hit_8last22w17"></div>
            </div>
            <div id="hit_8lastw17" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w17"></div>
              <div class="ff_div_field" id="hit_8last32w17"></div>
            </div>
            <div id="hit_8lastw17" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w17"></div>
              <div class="ff_div_field" id="hit_8last42w17"></div>
            </div>
            <div id="hit_8lastw17" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w17"></div>
              <div class="ff_div_field" id="hit_8last52w17"></div>
            </div>
            <div id="hit_8lastw17" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w17"></div>
              <div class="ff_div_field" id="hit_8last62w17"></div>
            </div>
            <div id="hit_8lastw17" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w17"></div>
              <div class="ff_div_field" id="hit_8last72w17"></div>
            </div>
            <div id="hit_8lastw17" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w17"></div>
              <div class="ff_div_field" id="hit_8last82w17"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">879,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-3" class="quantity_product quantity_product_81233" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81233" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81233" name="id_product_attribute">
		<input type="hidden" value="81233" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81233" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81233 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81233" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81233" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">879,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price17" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-3" class="quantity_product quantity_product_81233" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81233" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81233" name="id_product_attribute">
		<input type="hidden" value="81233" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81233" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81233 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81233" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81233" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv17" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d17">
              <input type="text" id="hit_depserv0_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d17">
              <input type="text" id="hit_qteserv0_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d17">
              <input type="text" id="hit_depserv1_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d17">
              <input type="text" id="hit_qteserv1_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d17">
              <input type="text" id="hit_depserv2_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d17">
              <input type="text" id="hit_qteserv2_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d17">
              <input type="text" id="hit_depserv3_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d17">
              <input type="text" id="hit_qteserv3_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d17">
              <input type="text" id="hit_depserv4_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d17">
              <input type="text" id="hit_qteserv4_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d17">
              <input type="text" id="hit_depserv5_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d17">
              <input type="text" id="hit_qteserv5_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d17">
              <input type="text" id="hit_depserv6_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d17">
              <input type="text" id="hit_qteserv6_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d17">
              <input type="text" id="hit_depserv7_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d17">
              <input type="text" id="hit_qteserv7_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d17">
              <input type="text" id="hit_depserv8_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d17">
              <input type="text" id="hit_qteserv8_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d17">
              <input type="text" id="hit_depserv9_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d17">
              <input type="text" id="hit_qteserv9_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d17">
              <input type="text" id="hit_depserv10_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d17">
              <input type="text" id="hit_qteserv10_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d17">
              <input type="text" id="hit_depserv11_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d17">
              <input type="text" id="hit_qteserv11_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d17">
              <input type="text" id="hit_depserv12_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d17">
              <input type="text" id="hit_qteserv12_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d17">
              <input type="text" id="hit_depserv13_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d17">
              <input type="text" id="hit_qteserv13_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d17">
              <input type="text" id="hit_depserv14_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d17">
              <input type="text" id="hit_qteserv14_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d17">
              <input type="text" id="hit_depserv15_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d17">
              <input type="text" id="hit_qteserv15_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d17">
              <input type="text" id="hit_depserv16_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d17">
              <input type="text" id="hit_qteserv16_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d17">
              <input type="text" id="hit_depserv17_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d17">
              <input type="text" id="hit_qteserv17_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d17">
              <input type="text" id="hit_depserv18_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d17">
              <input type="text" id="hit_qteserv18_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d17">
              <input type="text" id="hit_depserv19_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d17">
              <input type="text" id="hit_qteserv19_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_17" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d17">
              <input type="text" id="hit_depserv20_17" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d17">
              <input type="text" id="hit_qteserv20_17" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link17" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="81234" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81234-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris-avec-sacoche-offert.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/404191-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris-avec-sacoche-offert.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/404191-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris-avec-sacoche-offert.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/404188-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris-avec-sacoche-offert.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                                                       </a>
                              <input type="hidden" id="hit_ref18" value="82LX00CFFG-SAC-W11P">
          <input type="hidden" id="hit_id18" value="81234">
          <input type="hidden" id="hit_qte18" value="-1">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81234-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris-avec-sacoche-offert.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Windows 11 Pro / Gris Avec SACOCHE Offert</a></h2>
            <span class="product-reference">[82LX00CFFG-SAC-W11P]</span>
                  
                
        	<div id="product-description-short-81234" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/81234-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris-avec-sacoche-offert.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - <span style="font-size:10pt;color:#d0121a;"><strong>Windows 11 Pro</strong></span> - Couleur Gris nuage - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an Avec SACOCHE Offert</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt18"></p>
        		<p class="ff_p_field" id="hit_2mvt18"></p>   
            <div id="hit_8lastw18" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w18"></div>
              <div class="ff_div_field" id="hit_8last12w18"></div>
            </div>
            <div id="hit_8lastw18" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w18"></div>
              <div class="ff_div_field" id="hit_8last22w18"></div>
            </div>
            <div id="hit_8lastw18" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w18"></div>
              <div class="ff_div_field" id="hit_8last32w18"></div>
            </div>
            <div id="hit_8lastw18" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w18"></div>
              <div class="ff_div_field" id="hit_8last42w18"></div>
            </div>
            <div id="hit_8lastw18" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w18"></div>
              <div class="ff_div_field" id="hit_8last52w18"></div>
            </div>
            <div id="hit_8lastw18" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w18"></div>
              <div class="ff_div_field" id="hit_8last62w18"></div>
            </div>
            <div id="hit_8lastw18" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w18"></div>
              <div class="ff_div_field" id="hit_8last72w18"></div>
            </div>
            <div id="hit_8lastw18" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w18"></div>
              <div class="ff_div_field" id="hit_8last82w18"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">889,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-1" class="quantity_product quantity_product_81234" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81234" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81234" name="id_product_attribute">
		<input type="hidden" value="81234" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81234" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81234 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81234" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81234" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">889,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price18" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-1" class="quantity_product quantity_product_81234" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_81234" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_81234" name="id_product_attribute">
		<input type="hidden" value="81234" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_81234" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_81234 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="81234" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="81234" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv18" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d18">
              <input type="text" id="hit_depserv0_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d18">
              <input type="text" id="hit_qteserv0_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d18">
              <input type="text" id="hit_depserv1_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d18">
              <input type="text" id="hit_qteserv1_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d18">
              <input type="text" id="hit_depserv2_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d18">
              <input type="text" id="hit_qteserv2_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d18">
              <input type="text" id="hit_depserv3_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d18">
              <input type="text" id="hit_qteserv3_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d18">
              <input type="text" id="hit_depserv4_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d18">
              <input type="text" id="hit_qteserv4_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d18">
              <input type="text" id="hit_depserv5_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d18">
              <input type="text" id="hit_qteserv5_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d18">
              <input type="text" id="hit_depserv6_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d18">
              <input type="text" id="hit_qteserv6_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d18">
              <input type="text" id="hit_depserv7_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d18">
              <input type="text" id="hit_qteserv7_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d18">
              <input type="text" id="hit_depserv8_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d18">
              <input type="text" id="hit_qteserv8_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d18">
              <input type="text" id="hit_depserv9_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d18">
              <input type="text" id="hit_qteserv9_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d18">
              <input type="text" id="hit_depserv10_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d18">
              <input type="text" id="hit_qteserv10_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d18">
              <input type="text" id="hit_depserv11_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d18">
              <input type="text" id="hit_qteserv11_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d18">
              <input type="text" id="hit_depserv12_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d18">
              <input type="text" id="hit_qteserv12_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d18">
              <input type="text" id="hit_depserv13_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d18">
              <input type="text" id="hit_qteserv13_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d18">
              <input type="text" id="hit_depserv14_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d18">
              <input type="text" id="hit_qteserv14_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d18">
              <input type="text" id="hit_depserv15_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d18">
              <input type="text" id="hit_qteserv15_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d18">
              <input type="text" id="hit_depserv16_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d18">
              <input type="text" id="hit_qteserv16_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d18">
              <input type="text" id="hit_depserv17_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d18">
              <input type="text" id="hit_qteserv17_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d18">
              <input type="text" id="hit_depserv18_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d18">
              <input type="text" id="hit_qteserv18_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d18">
              <input type="text" id="hit_depserv19_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d18">
              <input type="text" id="hit_qteserv19_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_18" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d18">
              <input type="text" id="hit_depserv20_18" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d18">
              <input type="text" id="hit_qteserv20_18" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link18" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="88243" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/88243-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/440764-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/440764-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/440763-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                        </a>
                              <input type="hidden" id="hit_ref19" value="82LX00EAFG-2Y">
          <input type="hidden" id="hit_id19" value="88243">
          <input type="hidden" id="hit_qte19" value="-7">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/88243-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Windows 11 / Gris</a></h2>
            <span class="product-reference">[82LX00EAFG-2Y]</span>
                  
                
        	<div id="product-description-short-88243" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/88243-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - <span style="font-size:10pt;color:#d0121a;"><strong>Windows 11</strong></span>&nbsp;- Couleur&nbsp;Gris - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 2 ans</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt19"></p>
        		<p class="ff_p_field" id="hit_2mvt19"></p>   
            <div id="hit_8lastw19" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w19"></div>
              <div class="ff_div_field" id="hit_8last12w19"></div>
            </div>
            <div id="hit_8lastw19" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w19"></div>
              <div class="ff_div_field" id="hit_8last22w19"></div>
            </div>
            <div id="hit_8lastw19" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w19"></div>
              <div class="ff_div_field" id="hit_8last32w19"></div>
            </div>
            <div id="hit_8lastw19" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w19"></div>
              <div class="ff_div_field" id="hit_8last42w19"></div>
            </div>
            <div id="hit_8lastw19" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w19"></div>
              <div class="ff_div_field" id="hit_8last52w19"></div>
            </div>
            <div id="hit_8lastw19" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w19"></div>
              <div class="ff_div_field" id="hit_8last62w19"></div>
            </div>
            <div id="hit_8lastw19" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w19"></div>
              <div class="ff_div_field" id="hit_8last72w19"></div>
            </div>
            <div id="hit_8lastw19" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w19"></div>
              <div class="ff_div_field" id="hit_8last82w19"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">899,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-7" class="quantity_product quantity_product_88243" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_88243" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_88243" name="id_product_attribute">
		<input type="hidden" value="88243" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_88243" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_88243 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="88243" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="88243" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">899,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price19" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-7" class="quantity_product quantity_product_88243" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_88243" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_88243" name="id_product_attribute">
		<input type="hidden" value="88243" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_88243" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_88243 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="88243" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="88243" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv19" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d19">
              <input type="text" id="hit_depserv0_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d19">
              <input type="text" id="hit_qteserv0_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d19">
              <input type="text" id="hit_depserv1_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d19">
              <input type="text" id="hit_qteserv1_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d19">
              <input type="text" id="hit_depserv2_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d19">
              <input type="text" id="hit_qteserv2_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d19">
              <input type="text" id="hit_depserv3_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d19">
              <input type="text" id="hit_qteserv3_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d19">
              <input type="text" id="hit_depserv4_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d19">
              <input type="text" id="hit_qteserv4_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d19">
              <input type="text" id="hit_depserv5_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d19">
              <input type="text" id="hit_qteserv5_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d19">
              <input type="text" id="hit_depserv6_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d19">
              <input type="text" id="hit_qteserv6_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d19">
              <input type="text" id="hit_depserv7_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d19">
              <input type="text" id="hit_qteserv7_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d19">
              <input type="text" id="hit_depserv8_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d19">
              <input type="text" id="hit_qteserv8_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d19">
              <input type="text" id="hit_depserv9_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d19">
              <input type="text" id="hit_qteserv9_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d19">
              <input type="text" id="hit_depserv10_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d19">
              <input type="text" id="hit_qteserv10_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d19">
              <input type="text" id="hit_depserv11_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d19">
              <input type="text" id="hit_qteserv11_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d19">
              <input type="text" id="hit_depserv12_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d19">
              <input type="text" id="hit_qteserv12_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d19">
              <input type="text" id="hit_depserv13_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d19">
              <input type="text" id="hit_qteserv13_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d19">
              <input type="text" id="hit_depserv14_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d19">
              <input type="text" id="hit_qteserv14_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d19">
              <input type="text" id="hit_depserv15_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d19">
              <input type="text" id="hit_qteserv15_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d19">
              <input type="text" id="hit_depserv16_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d19">
              <input type="text" id="hit_qteserv16_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d19">
              <input type="text" id="hit_depserv17_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d19">
              <input type="text" id="hit_qteserv17_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d19">
              <input type="text" id="hit_depserv18_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d19">
              <input type="text" id="hit_qteserv18_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d19">
              <input type="text" id="hit_depserv19_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d19">
              <input type="text" id="hit_qteserv19_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_19" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d19">
              <input type="text" id="hit_depserv20_19" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d19">
              <input type="text" id="hit_qteserv20_19" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link19" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="89840" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/89840-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/449224-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/449224-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/449224-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                        </a>
                              <input type="hidden" id="hit_ref20" value="82LX00G4FG-2Y-W11P">
          <input type="hidden" id="hit_id20" value="89840">
          <input type="hidden" id="hit_qte20" value="-4">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/89840-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Windows 11 Pro / Gris</a></h2>
            <span class="product-reference">[82LX00G4FG-2Y-W11P]</span>
                  
                
        	<div id="product-description-short-89840" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/89840-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-pro-gris.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - <span style="font-size:10pt;color:#d0121a;"><strong>Windows 11 Pro</strong></span> &nbsp;- Couleur Gris nuage - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie&nbsp;2 ans</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt20"></p>
        		<p class="ff_p_field" id="hit_2mvt20"></p>   
            <div id="hit_8lastw20" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w20"></div>
              <div class="ff_div_field" id="hit_8last12w20"></div>
            </div>
            <div id="hit_8lastw20" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w20"></div>
              <div class="ff_div_field" id="hit_8last22w20"></div>
            </div>
            <div id="hit_8lastw20" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w20"></div>
              <div class="ff_div_field" id="hit_8last32w20"></div>
            </div>
            <div id="hit_8lastw20" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w20"></div>
              <div class="ff_div_field" id="hit_8last42w20"></div>
            </div>
            <div id="hit_8lastw20" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w20"></div>
              <div class="ff_div_field" id="hit_8last52w20"></div>
            </div>
            <div id="hit_8lastw20" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w20"></div>
              <div class="ff_div_field" id="hit_8last62w20"></div>
            </div>
            <div id="hit_8lastw20" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w20"></div>
              <div class="ff_div_field" id="hit_8last72w20"></div>
            </div>
            <div id="hit_8lastw20" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w20"></div>
              <div class="ff_div_field" id="hit_8last82w20"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">899,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-4" class="quantity_product quantity_product_89840" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_89840" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_89840" name="id_product_attribute">
		<input type="hidden" value="89840" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_89840" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_89840 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="89840" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="89840" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">899,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price20" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-4" class="quantity_product quantity_product_89840" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_89840" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_89840" name="id_product_attribute">
		<input type="hidden" value="89840" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_89840" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_89840 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="89840" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="89840" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv20" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d20">
              <input type="text" id="hit_depserv0_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d20">
              <input type="text" id="hit_qteserv0_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d20">
              <input type="text" id="hit_depserv1_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d20">
              <input type="text" id="hit_qteserv1_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d20">
              <input type="text" id="hit_depserv2_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d20">
              <input type="text" id="hit_qteserv2_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d20">
              <input type="text" id="hit_depserv3_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d20">
              <input type="text" id="hit_qteserv3_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d20">
              <input type="text" id="hit_depserv4_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d20">
              <input type="text" id="hit_qteserv4_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d20">
              <input type="text" id="hit_depserv5_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d20">
              <input type="text" id="hit_qteserv5_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d20">
              <input type="text" id="hit_depserv6_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d20">
              <input type="text" id="hit_qteserv6_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d20">
              <input type="text" id="hit_depserv7_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d20">
              <input type="text" id="hit_qteserv7_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d20">
              <input type="text" id="hit_depserv8_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d20">
              <input type="text" id="hit_qteserv8_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d20">
              <input type="text" id="hit_depserv9_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d20">
              <input type="text" id="hit_qteserv9_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d20">
              <input type="text" id="hit_depserv10_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d20">
              <input type="text" id="hit_qteserv10_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d20">
              <input type="text" id="hit_depserv11_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d20">
              <input type="text" id="hit_qteserv11_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d20">
              <input type="text" id="hit_depserv12_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d20">
              <input type="text" id="hit_qteserv12_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d20">
              <input type="text" id="hit_depserv13_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d20">
              <input type="text" id="hit_qteserv13_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d20">
              <input type="text" id="hit_depserv14_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d20">
              <input type="text" id="hit_qteserv14_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d20">
              <input type="text" id="hit_depserv15_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d20">
              <input type="text" id="hit_qteserv15_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d20">
              <input type="text" id="hit_depserv16_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d20">
              <input type="text" id="hit_qteserv16_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d20">
              <input type="text" id="hit_depserv17_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d20">
              <input type="text" id="hit_qteserv17_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d20">
              <input type="text" id="hit_depserv18_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d20">
              <input type="text" id="hit_qteserv18_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d20">
              <input type="text" id="hit_depserv19_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d20">
              <input type="text" id="hit_qteserv19_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_20" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d20">
              <input type="text" id="hit_depserv20_20" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d20">
              <input type="text" id="hit_qteserv20_20" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link20" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="85630" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/85630-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/427518-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/427518-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/427518-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                        </a>
                              <input type="hidden" id="hit_ref21" value="82LX00EAFE-2Y">
          <input type="hidden" id="hit_id21" value="85630">
          <input type="hidden" id="hit_qte21" value="-5">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/85630-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Windows 11 / Gris</a></h2>
            <span class="product-reference">[82LX00EAFE-2Y]</span>
                  
                
        	<div id="product-description-short-85630" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/85630-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - <span style="font-size:10pt;color:#d0121a;"><strong>Windows 11</strong></span>&nbsp;- Couleur Gris nuage - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie&nbsp;2 ans</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt21"></p>
        		<p class="ff_p_field" id="hit_2mvt21"></p>   
            <div id="hit_8lastw21" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w21"></div>
              <div class="ff_div_field" id="hit_8last12w21"></div>
            </div>
            <div id="hit_8lastw21" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w21"></div>
              <div class="ff_div_field" id="hit_8last22w21"></div>
            </div>
            <div id="hit_8lastw21" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w21"></div>
              <div class="ff_div_field" id="hit_8last32w21"></div>
            </div>
            <div id="hit_8lastw21" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w21"></div>
              <div class="ff_div_field" id="hit_8last42w21"></div>
            </div>
            <div id="hit_8lastw21" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w21"></div>
              <div class="ff_div_field" id="hit_8last52w21"></div>
            </div>
            <div id="hit_8lastw21" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w21"></div>
              <div class="ff_div_field" id="hit_8last62w21"></div>
            </div>
            <div id="hit_8lastw21" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w21"></div>
              <div class="ff_div_field" id="hit_8last72w21"></div>
            </div>
            <div id="hit_8lastw21" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w21"></div>
              <div class="ff_div_field" id="hit_8last82w21"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">899,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-5" class="quantity_product quantity_product_85630" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_85630" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_85630" name="id_product_attribute">
		<input type="hidden" value="85630" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_85630" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_85630 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="85630" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="85630" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list stock" title="Disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">899,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price21" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-5" class="quantity_product quantity_product_85630" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_85630" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_85630" name="id_product_attribute">
		<input type="hidden" value="85630" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_85630" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_85630 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="85630" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="85630" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv21" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d21">
              <input type="text" id="hit_depserv0_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d21">
              <input type="text" id="hit_qteserv0_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d21">
              <input type="text" id="hit_depserv1_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d21">
              <input type="text" id="hit_qteserv1_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d21">
              <input type="text" id="hit_depserv2_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d21">
              <input type="text" id="hit_qteserv2_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d21">
              <input type="text" id="hit_depserv3_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d21">
              <input type="text" id="hit_qteserv3_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d21">
              <input type="text" id="hit_depserv4_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d21">
              <input type="text" id="hit_qteserv4_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d21">
              <input type="text" id="hit_depserv5_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d21">
              <input type="text" id="hit_qteserv5_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d21">
              <input type="text" id="hit_depserv6_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d21">
              <input type="text" id="hit_qteserv6_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d21">
              <input type="text" id="hit_depserv7_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d21">
              <input type="text" id="hit_qteserv7_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d21">
              <input type="text" id="hit_depserv8_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d21">
              <input type="text" id="hit_qteserv8_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d21">
              <input type="text" id="hit_depserv9_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d21">
              <input type="text" id="hit_qteserv9_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d21">
              <input type="text" id="hit_depserv10_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d21">
              <input type="text" id="hit_qteserv10_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d21">
              <input type="text" id="hit_depserv11_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d21">
              <input type="text" id="hit_qteserv11_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d21">
              <input type="text" id="hit_depserv12_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d21">
              <input type="text" id="hit_qteserv12_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d21">
              <input type="text" id="hit_depserv13_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d21">
              <input type="text" id="hit_qteserv13_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d21">
              <input type="text" id="hit_depserv14_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d21">
              <input type="text" id="hit_qteserv14_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d21">
              <input type="text" id="hit_depserv15_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d21">
              <input type="text" id="hit_qteserv15_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d21">
              <input type="text" id="hit_depserv16_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d21">
              <input type="text" id="hit_qteserv16_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d21">
              <input type="text" id="hit_depserv17_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d21">
              <input type="text" id="hit_qteserv17_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d21">
              <input type="text" id="hit_depserv18_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d21">
              <input type="text" id="hit_qteserv18_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d21">
              <input type="text" id="hit_depserv19_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d21">
              <input type="text" id="hit_qteserv19_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_21" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d21">
              <input type="text" id="hit_depserv20_21" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d21">
              <input type="text" id="hit_qteserv20_21" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link21" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list stock" title="Disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list stock" title="Disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list stock" title="Disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list stock" title="Disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="91416" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91416-pc-portable-hp-15-fd0592nk-n100-8-go-256-go-ssd-windows-11-pro-noir.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/457400-home/pc-portable-hp-15-fd0592nk-n100-8-go-256-go-ssd-windows-11-pro-noir.jpg" title="301" alt="Pc Portable HP 15-fd0592nk..." data-full-size-image-url="https://www.tunisianet.com.tn/457400-large/pc-portable-hp-15-fd0592nk-n100-8-go-256-go-ssd-windows-11-pro-noir.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/457398-home/pc-portable-hp-15-fd0592nk-n100-8-go-256-go-ssd-windows-11-pro-noir.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                                                       </a>
                              <input type="hidden" id="hit_ref22" value="CB6C9EA-W11P">
          <input type="hidden" id="hit_id22" value="91416">
          <input type="hidden" id="hit_qte22" value="-2">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91416-pc-portable-hp-15-fd0592nk-n100-8-go-256-go-ssd-windows-11-pro-noir.html">Pc Portable HP 15-fd0592nk / N100  / 8 Go / 256 Go SSD / Windows 11 Pro / Noir</a></h2>
            <span class="product-reference">[CB6C9EA-W11P]</span>
                  
                
        	<div id="product-description-short-91416" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/91416-pc-portable-hp-15-fd0592nk-n100-8-go-256-go-ssd-windows-11-pro-noir.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" Full HD (1920 x 1080), micro-bords, antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Core N100 </strong></span>, (jusqu’à 3.4 GHz,&nbsp;6 Mo de mémoire cache) - Mémoire 8 Go DDR4 - Disque SSD NVMe M.2 256 Go - Carte graphique Intel UHD Intégré - Wi-Fi 6 - Bluetooth 5.4 - Clavier noir profond, de grande taille avec pavé numérique - Caméra HP True Vision HD 720p avec réduction temporelle du bruit - Doubles haut-parleurs - 1x port USB Type-C - 2x ports USB Type-A - 1x port HDMI 1.4b - 1x prise combinée casque/microphone - <span style="font-size:10pt;color:#d0121a;"><strong>Windows 11 Pro</strong></span>&nbsp;- Couleur Noir - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an<br><br><br></strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt22"></p>
        		<p class="ff_p_field" id="hit_2mvt22"></p>   
            <div id="hit_8lastw22" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w22"></div>
              <div class="ff_div_field" id="hit_8last12w22"></div>
            </div>
            <div id="hit_8lastw22" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w22"></div>
              <div class="ff_div_field" id="hit_8last22w22"></div>
            </div>
            <div id="hit_8lastw22" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w22"></div>
              <div class="ff_div_field" id="hit_8last32w22"></div>
            </div>
            <div id="hit_8lastw22" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w22"></div>
              <div class="ff_div_field" id="hit_8last42w22"></div>
            </div>
            <div id="hit_8lastw22" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w22"></div>
              <div class="ff_div_field" id="hit_8last52w22"></div>
            </div>
            <div id="hit_8lastw22" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w22"></div>
              <div class="ff_div_field" id="hit_8last62w22"></div>
            </div>
            <div id="hit_8lastw22" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w22"></div>
              <div class="ff_div_field" id="hit_8last72w22"></div>
            </div>
            <div id="hit_8lastw22" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w22"></div>
              <div class="ff_div_field" id="hit_8last82w22"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/6_hp">
                <img src="https://www.tunisianet.com.tn/img/m/6.jpg" class="img img-thumbnail manufacturer-logo" alt="HP">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">909,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-2" class="quantity_product quantity_product_91416" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_91416" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_91416" name="id_product_attribute">
		<input type="hidden" value="91416" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_91416" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_91416 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="91416" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="91416" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/6_hp">
                  <img src="https://www.tunisianet.com.tn/img/m/6.jpg" class="img img-thumbnail manufacturer-logo" alt="HP">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">909,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price22" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-2" class="quantity_product quantity_product_91416" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_91416" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_91416" name="id_product_attribute">
		<input type="hidden" value="91416" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_91416" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_91416 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="91416" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="91416" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv22" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d22">
              <input type="text" id="hit_depserv0_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d22">
              <input type="text" id="hit_qteserv0_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d22">
              <input type="text" id="hit_depserv1_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d22">
              <input type="text" id="hit_qteserv1_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d22">
              <input type="text" id="hit_depserv2_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d22">
              <input type="text" id="hit_qteserv2_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d22">
              <input type="text" id="hit_depserv3_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d22">
              <input type="text" id="hit_qteserv3_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d22">
              <input type="text" id="hit_depserv4_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d22">
              <input type="text" id="hit_qteserv4_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d22">
              <input type="text" id="hit_depserv5_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d22">
              <input type="text" id="hit_qteserv5_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d22">
              <input type="text" id="hit_depserv6_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d22">
              <input type="text" id="hit_qteserv6_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d22">
              <input type="text" id="hit_depserv7_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d22">
              <input type="text" id="hit_qteserv7_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d22">
              <input type="text" id="hit_depserv8_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d22">
              <input type="text" id="hit_qteserv8_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d22">
              <input type="text" id="hit_depserv9_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d22">
              <input type="text" id="hit_qteserv9_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d22">
              <input type="text" id="hit_depserv10_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d22">
              <input type="text" id="hit_qteserv10_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d22">
              <input type="text" id="hit_depserv11_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d22">
              <input type="text" id="hit_qteserv11_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d22">
              <input type="text" id="hit_depserv12_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d22">
              <input type="text" id="hit_qteserv12_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d22">
              <input type="text" id="hit_depserv13_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d22">
              <input type="text" id="hit_qteserv13_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d22">
              <input type="text" id="hit_depserv14_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d22">
              <input type="text" id="hit_qteserv14_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d22">
              <input type="text" id="hit_depserv15_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d22">
              <input type="text" id="hit_qteserv15_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d22">
              <input type="text" id="hit_depserv16_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d22">
              <input type="text" id="hit_qteserv16_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d22">
              <input type="text" id="hit_depserv17_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d22">
              <input type="text" id="hit_qteserv17_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d22">
              <input type="text" id="hit_depserv18_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d22">
              <input type="text" id="hit_qteserv18_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d22">
              <input type="text" id="hit_depserv19_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d22">
              <input type="text" id="hit_qteserv19_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_22" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d22">
              <input type="text" id="hit_depserv20_22" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d22">
              <input type="text" id="hit_qteserv20_22" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link22" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
          </div>
        </div>
  </article>

        </div>
        
              
        <div class="item-product col-xs-12">
          
  <article class="product-miniature js-product-miniature col-xs-12 propadding" data-id-product="86144" data-id-product-attribute="0" itemscope="" itemtype="http://schema.org/Product">
    <div class="thumbnail-container text-xs-center">
          <div class="wb-image-block col-lg-3 col-xl-3 col-md-4 col-sm-4 col-xs-6">
        
                      <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/86144-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.html" class="thumbnail product-thumbnail first-img">
              <img class="center-block img-responsive" src="https://www.tunisianet.com.tn/430099-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.jpg" title="301" alt="Pc Portable Lenovo IdeaPad..." data-full-size-image-url="https://www.tunisianet.com.tn/430099-large/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.jpg" width="250" height="250">              
                                                                                             <img class="second-img img-responsive center-block" src="https://www.tunisianet.com.tn/430097-home/pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.jpg" alt="" title="" itemprop="image" width="250" height="250">
                                                                                                                       </a>
                              <input type="hidden" id="hit_ref23" value="82LX00EAFE-SAC">
          <input type="hidden" id="hit_id23" value="86144">
          <input type="hidden" id="hit_qte23" value="-2">  
        
        
        
          <ul class="product-flags">
                      </ul>
        
        
      </div>
      
      <div class="wb-product-desc product-description col-lg-5 col-xl-5 col-md-6 col-sm-6 col-xs-6">
        <div class="progre">
          
          	
          
        </div>
        
        
                    	<h2 class="h3 product-title" itemprop="name"><a href="https://www.tunisianet.com.tn/pc-portable-tunisie/86144-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.html">Pc Portable Lenovo IdeaPad 1 15IJL7 / Celeron N4500 / 8 Go / 256 Go SSD / Windows 11 / Gris</a></h2>
            <span class="product-reference">[82LX00EAFE-SAC]</span>
                  
                
        	<div id="product-description-short-86144" itemprop="description" class="listds">
            <a href="https://www.tunisianet.com.tn/pc-portable-tunisie/86144-pc-portable-lenovo-ideapad-1-15ijl7-celeron-n4500-8-go-256-go-ssd-windows-11-gris.html">
            	<span style="font-size:10pt;color:#d0121a;"><strong>Écran 15.6" HD (1366x768), antireflet</strong></span> - Processeur <span style="font-size:10pt;color:#d0121a;"><strong>Intel Celeron N4500</strong></span>, (jusqu’à 2.8 GHz,&nbsp;4 Mo de mémoire cache) - Mémoire <span style="font-size:10pt;color:#d0121a;"><strong>8 Go DDR4</strong></span> - Disque SSD <span style="font-size:10pt;color:#d0121a;"><strong>M.2 NVMe 256 Go</strong></span> - Carte graphique <span style="font-size:10pt;color:#d0121a;"><strong>Intel UHD Graphics intégrée</strong></span> - Lecteur de carte SD - 2x Haut-parleurs stéréo 1.5 W, Dolby Audio - Caméra HD 720p avec obturateur de confidentialité - <span style="font-size:10pt;color:#d0121a;"><strong>Wi-Fi 6</strong></span> - Bluetooth 5.2 - 1x USB 2.0 - 1x USB 3.2 - 1x USB-C 3.2 - 1x HDMI 1.4b - 1x prise combinée casque/microphone (3.5 mm) - <span style="font-size:10pt;color:#d0121a;"><strong>Windows 11</strong></span>&nbsp;- Couleur Gris nuage - <span style="font-size:10pt;color:#d0121a;"><strong>Garantie 1 an<br>+ Sacoche pour PC Portable 15.6"</strong></span>
                          </a>
            <p class="ff_p_field" id="hit_1mvt23"></p>
        		<p class="ff_p_field" id="hit_2mvt23"></p>   
            <div id="hit_8lastw23" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last11w23"></div>
              <div class="ff_div_field" id="hit_8last12w23"></div>
            </div>
            <div id="hit_8lastw23" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last21w23"></div>
              <div class="ff_div_field" id="hit_8last22w23"></div>
            </div>
            <div id="hit_8lastw23" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last31w23"></div>
              <div class="ff_div_field" id="hit_8last32w23"></div>
            </div>
            <div id="hit_8lastw23" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last41w23"></div>
              <div class="ff_div_field" id="hit_8last42w23"></div>
            </div>
            <div id="hit_8lastw23" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last51w23"></div>
              <div class="ff_div_field" id="hit_8last52w23"></div>
            </div>
            <div id="hit_8lastw23" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last61w23"></div>
              <div class="ff_div_field" id="hit_8last62w23"></div>
            </div>
            <div id="hit_8lastw23" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last71w23"></div>
              <div class="ff_div_field" id="hit_8last72w23"></div>
            </div>
            <div id="hit_8lastw23" class="ff_div col-lg-18 col-xl-18 col-md-18 col-sm-3 col-xs-3">
              <div class="ff_div_field" id="hit_8last81w23"></div>
              <div class="ff_div_field" id="hit_8last82w23"></div>
            </div>
          </div>
         
        
        <!--Logo Marque-->
                  <div class="product-manufacturer">
                          <a href="https://www.tunisianet.com.tn/3_lenovo">
                <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
              </a>
                      </div>
                <!--Fin Logo Marque-->

        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
        
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">909,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                          
            </div>
                  
                
        <div class="button-group">        
          <div class="topbtn">
            <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-2" class="quantity_product quantity_product_86144" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_86144" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_86144" name="id_product_attribute">
		<input type="hidden" value="86144" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_86144" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_86144 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



            <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="86144" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
            <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="86144" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
            
              <a class="quick-view pquick btn" href="#" data-link-action="quickview">
              <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
              </a>
                    
          </div>
        </div>
      </div>
      
      <div id="productList-availability-store" class="productList-availability-store">
                  <div class="store-availability-intro">Disponibilité</div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stores">
            <div class="store-availability-list hstock" title="Non disponible magasin Tunis">Boutique Tunis</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
            <div class="store-availability-list hstock" title="Non disponible magasin Sfax">Sfax</div>
            <div class="store-availability-list hstock" title="Non disponible Drive-in Charguia">Tunis Drive-IN</div>
          </div>
              </div>
            
      <div class="wb-action-block col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12">      	
        
        	<!--Logo Marque-->
                                <div class="product-manufacturer">
                              <a href="https://www.tunisianet.com.tn/3_lenovo">
                  <img src="https://www.tunisianet.com.tn/img/m/3.jpg" class="img img-thumbnail manufacturer-logo" alt="Lenovo">
                </a>
                          </div>
                    <!--Fin Logo Marque-->
        
        
                      <div class="product-price-and-shipping">
              <span itemprop="price" class="price">909,000 DT</span>
                            
                            
              <span class="sr-only">Prix</span> 
                        
            </div>
                  
        <div id="hit_price23" class="ff_price_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
        </div>
        
        	<div id="stock_availability">
                          <span class="in-stock">En stock</span>
                      </div>
                  
        
          <div class="button-group">        
            <div class="topbtn">
              <div class="button-container cart add-cart">
	<form action="https://www.tunisianet.com.tn/panier" method="post">
		<input type="hidden" name="token" value="898389d4a5ba0937a5c39f555e4ec5c3">
		<input type="hidden" value="-2" class="quantity_product quantity_product_86144" name="quantity_product">
		<input type="hidden" value="1" class="minimal_quantity minimal_quantity_86144" name="minimal_quantity">
		<input type="hidden" value="0" class="id_product_attribute id_product_attribute_86144" name="id_product_attribute">
		<input type="hidden" value="86144" class="id_product" name="id_product">
		<input type="hidden" name="id_customization" value="" class="product_customization_id">
			
		<input type="hidden" class="input-group form-control qty qty_product qty_product_86144" name="qty" value="1" data-min="1">
		  <button title="Chariot" class="cartb  btn-product add-to-cart wb-bt-cart wb-bt-cart_86144 wb-enable" data-button-action="add-to-cart" type="submit">
									 <svg width="16px" height="16px"><use xlink:href="#bcart"></use></svg><span class="pcart">Ajouter au panier</span>
		  </button>
	</form>
</div>



              <div class="wishlist">	
		<a class="wish wb-wishlist-button btn-product btn" href="javascript:void(0)" data-id-wishlist="" data-id-product="86144" data-id-product-attribute="0" title="Liste de souhaits">
									<span class="pwish">
                    <svg width="16px" height="16px"><use xlink:href="#heart"></use></svg> <span>Favoris</span>
            </span>
		</a>	
</div>
              <div class="compare">
	<a class="wb-compare-button btn-product btn" href="javascript:void(0)" data-id-product="86144" title="Comparer">
				<span class="wb-compare-content">
			<svg width="16px" height="16px"><use xlink:href="#compare"></use></svg>
			<span>Comparer</span>
		</span>
	</a>
</div>
              
                <a class="quick-view pquick btn" href="#" data-link-action="quickview">
                <svg width="16px" height="16px"><use xlink:href="#bquick"></use></svg>
                </a>
                      
            </div>
          </div>
        
        <!--<input type="text" id="hit_qteserv23" value="" style="display:none" class="ff_input_field" disabled="disabled" />-->
                  <div id="hit_stockdep0_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep01d23">
              <input type="text" id="hit_depserv0_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep02d23">
              <input type="text" id="hit_qteserv0_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep1_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep11d23">
              <input type="text" id="hit_depserv1_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep12d23">
              <input type="text" id="hit_qteserv1_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep2_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep21d23">
              <input type="text" id="hit_depserv2_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep22d23">
              <input type="text" id="hit_qteserv2_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep3_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep31d23">
              <input type="text" id="hit_depserv3_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep32d23">
              <input type="text" id="hit_qteserv3_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep4_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep41d23">
              <input type="text" id="hit_depserv4_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep42d23">
              <input type="text" id="hit_qteserv4_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep5_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep51d23">
              <input type="text" id="hit_depserv5_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep52d23">
              <input type="text" id="hit_qteserv5_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep6_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep61d23">
              <input type="text" id="hit_depserv6_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep62d23">
              <input type="text" id="hit_qteserv6_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep7_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep71d23">
              <input type="text" id="hit_depserv7_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep72d23">
              <input type="text" id="hit_qteserv7_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep8_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep81d23">
              <input type="text" id="hit_depserv8_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep82d23">
              <input type="text" id="hit_qteserv8_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep9_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep91d23">
              <input type="text" id="hit_depserv9_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep92d23">
              <input type="text" id="hit_qteserv9_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep10_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep101d23">
              <input type="text" id="hit_depserv10_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep102d23">
              <input type="text" id="hit_qteserv10_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep11_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep111d23">
              <input type="text" id="hit_depserv11_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep112d23">
              <input type="text" id="hit_qteserv11_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep12_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep121d23">
              <input type="text" id="hit_depserv12_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep122d23">
              <input type="text" id="hit_qteserv12_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep13_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep131d23">
              <input type="text" id="hit_depserv13_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep132d23">
              <input type="text" id="hit_qteserv13_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep14_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep141d23">
              <input type="text" id="hit_depserv14_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep142d23">
              <input type="text" id="hit_qteserv14_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep15_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep151d23">
              <input type="text" id="hit_depserv15_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep152d23">
              <input type="text" id="hit_qteserv15_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep16_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep161d23">
              <input type="text" id="hit_depserv16_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep162d23">
              <input type="text" id="hit_qteserv16_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep17_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep171d23">
              <input type="text" id="hit_depserv17_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep172d23">
              <input type="text" id="hit_qteserv17_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep18_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep181d23">
              <input type="text" id="hit_depserv18_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep182d23">
              <input type="text" id="hit_qteserv18_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep19_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep191d23">
              <input type="text" id="hit_depserv19_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep192d23">
              <input type="text" id="hit_qteserv19_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
                  <div id="hit_stockdep20_23" class="ff_sd_div col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" style="display:none">
            <div class="ff_sd_div_field" id="hit_stockdep201d23">
              <input type="text" id="hit_depserv20_23" value="" class="ff_sd_input_field" disabled="disabled">
            </div>
            <div class="ff_sd_div_field" id="hit_stockdep202d23">
              <input type="text" id="hit_qteserv20_23" value="" class="ff_sd_input_field" style="text-align:center" disabled="disabled">
            </div>
          </div>
            		<a id="hit_link23" class="ff_link_field" target="_blank" href=""></a>
      </div>
        <div id="productList-availability-store-mobile" class="productList-availability-store-mobile">
              <div class="store-availability-intro">Disponibilité</div>
        <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-12 stores">
          <div class="store-availability-list hstock" title="Non disponible magasin Tunis">Boutique Tunis</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sousse">Sousse</div>
          <div class="store-availability-list hstock" title="Non disponible magasin Sfax">Sfax</div>
          <div class="store-availability-list hstock" title="Non disponible Drive-in Charguia">Tunis Drive-IN</div>
        </div>
          </div>
        </div>
  </article>

        </div>
        
            <input type="hidden" id="hit_total" value="24">
    </div>
    
    <nav class="pagination">
  <div class="col-md-6 col-sm-6 col-xs-6 text-xs-left">
    
      Affichage 1-24 de 885 article(s)
    
  </div>

  <div class="col-md-6 cl-sm-6 col-xs-6 text-xs-right">
    
             <ul class="page-list clearfix">
        	                    
            <li class="current">
                              <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable" class="disabled js-search-link">
                                      1
                                  </a>
                          </li>
                    
            <li>
                              <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable?page=2" class="js-search-link">
                                      2
                                  </a>
                          </li>
                    
            <li>
                              <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable?page=3" class="js-search-link">
                                      3
                                  </a>
                          </li>
                    
            <li>
                              <span class="spacer">…</span>
                          </li>
                    
            <li>
                              <a rel="nofollow" href="https://www.tunisianet.com.tn/702-ordinateur-portable?page=37" class="js-search-link">
                                      37
                                  </a>
                          </li>
                    
            <li>
                              <a rel="next" href="https://www.tunisianet.com.tn/702-ordinateur-portable?page=2" class="next js-search-link">
                                      <i class="material-icons"></i>
                                  </a>
                          </li>
                  </ul>
          
  </div>

</nav>
  
</div></div>
          
        </div>

        <div id="js-product-list-bottom">
          
            <div id="js-product-list-bottom"></div>
          
        </div>

          </section>
`;

export function getSampleDom() {
    const root = new DOMParser().parseFromString(pieceOfDom, "text/html");
    if (!root)
        return;
    const content = root.querySelector(".products.product-thumbs");
    if (!content)
        return;

    console.log("Extracted DOM Tree:");
    console.log(root);

    const tree = extractElementFromHtml(content);
    if (!tree)
        return;
    treeDrawer(tree);
}

if (import.meta.main) {
    getSampleDom();
}