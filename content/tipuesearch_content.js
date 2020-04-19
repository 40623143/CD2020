var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n', 'tags': '', 'url': 'Develop.html'}, {'title': '翻譯', 'text': "3.4 Structural Problems: Static Loads 3.4結構問題：靜載荷 \n Again, as this text is not meant to cover all of the various structural considerations or problems encountered, I’d like to highlight a few problems (I kept it to three) that highlight the following: \n 再次，因為本文並不打算涵蓋所有各種結構上的考慮或遇到的問題，我想強調一些問題（我將其保留為三個）突出顯示以下內容： \n • Problems that can be thought of as either “individual” in that loads and forces are applied to single members being designed or the “structures as a whole,” that is,it could be an analysis of the entire (assembled) structure. \n •可以認為是“個體”的問題是載荷和力是適用於正在設計的單個成員或“整體結構”，即它可能是對整個（組裝）結構的分析。 \n • Many suppliers of individual parts (or sub-assemblies) offer design guidance in their own literature that is certainly available to the individual designer. Much of this information is based on both empirical and analytical experience gained over \n •許多單個零件（或子裝配體）的供應商在他們自己的文學作品，肯定可供個別設計師使用。 很多這些信息是基於在以下方面獲得的經驗和分析經驗得出的 \n the years. The designer is cautioned to understand the background and limita- tions on any of this information. Some of the information that is presented in \n 這些年。 提醒設計人員了解背景和限制-有關任何此信息的說明。 中顯示的一些信息 \n graphical or tabularized formats is rooted in fundamentals, but this may not be apparent. Some examples of this type of available “supplier data” is in the design of plastics, seals, EMI components, and bearings (to name a few). \n 圖形或表格格式的格式植根於基本原理，但這可能並非如此明顯的。 這種類型的可用“供應商數據”的一些示例在設計中塑料，密封件，EMI組件和軸承（僅舉幾例）。 \n Static loads on members in electronic enclosures are due to: \n 電子機櫃中成員的靜態載荷是由於： \n 1. The member’s own weight 1.會員的體重 \n 2. Loads applied by other members 2.其他成員施加的載荷 \n 3. Loads due to thermal effects, residual stresses, etc. 3.由於熱效應，殘餘應力等引起的負載 \n Static loads will induce members to fail either by applying a force resulting in: \n 靜載荷會通過施加力而導致構件失效，從而導致： \n 1. The yield strength of the material being exceeded. 1.超過材料的屈服強度。 \n 2. An over-deflection of the member which results in the member performing out-side of the design intent. As all loads produce some deflection, it must be known at some point in the design just how much deflection by the member is to be allowed. 2.構件過度偏轉，導致構件超出設計意圖。 由於所有載荷都會產生一定的撓度，因此必須在設計中的某個時刻知道允許構件產生多少撓度。 \n Failure by fracture under static loading is not as common in ductile materials as in brittle materials. In a ductile member, failure usually occurs as a result of excessive inelastic action which leads to very large overall deformations long before fracture. \n 靜載荷下的斷裂失效在延性材料中並不常見在脆性材料中。 在延性構件中，失效通常是由於過度拉伸而發生的。非彈性作用導致很長的整體變形斷裂。 \n Dynamic loading will be covered in Sect. 3.5. Dynamic loads are generally those that vary with time, whereas static loads do not change significantly in a relatively short time period. Some dynamic loads common in the design of electronic enclo-sures are repeated loads, impact loads, and energy loads. Energy loads are loads that are expressed more easily in terms of the energy transmitted during the impact period (than in terms of applied force). \n 動態加載將在Sect中介紹。 3.5。 動態負載通常是那些隨時間而變化，而靜態負載在相對不大的變化時間短。 電子外殼設計中常見的一些動態負載確保重複載荷，衝擊載荷和能量載荷。 能量負荷是指根據撞擊過程中傳遞的能量更容易表達週期（比作用力而言）。 \n Fracture caused by a repeated load is commonly referred to as a “fatigue” failure. Vibration can be a cause of a fatigue failure. \n 重複載荷造成的斷裂通常稱為“疲勞”故障。振動可能會導致疲勞失效。 \n Topics generally covered by the following three problems are:. \n 以下三個問題通常涵蓋的主題是： \n 1. What is a beam (vs. a plate)? 1.什麼是光束（相對於平板）？ \n 2. Stress formulae and maximum stress. 2.應力公式和最大應力。 \n 3. Deflection formulae and maximum deflection. 3.撓度公式和最大撓度。 \n 4. Section modulus. 4.截面模量。 \n 5. Modulus of elasticity. 5.彈性模量。 \n 6. End conditions. 6.結束條件。 \n 7. Load conditions. 7.負載條件。 \n 8. Worst-case loading. 8.最壞的情況下加載。 \n 9. Combined loading. 9.組合加載。 \n 3.4.1 Cantilever Beam Analysis (from Tecknit EMI Shielding Products Manual) 3.4.1懸臂梁分析（摘自Tecknit EMI屏蔽產品手冊） \n A majority of electronic enclosure stress analysis can be characterized by calculations of a “simple” beam. But, first of all, let us define a beam. Roark and Young (see Ref. [1]) make the following assumption for the application of beam flexure formulae: \n 大多數電子外殼應力分析可以通過計算來表徵“簡單”光束。 但是，首先讓我們定義一個光束。 Roark and Young（請參閱參考資料[1]）對於梁撓曲公式的應用做出以下假設： \n • The beam must be long in proportion to its depth, the span/depth ratio being 8 or more for metal beams, and 15 or more for beams with relatively thin webs. \n •樑的長度必須與深度成比例，跨度/深度比應為8或對於金屬梁，更多，對於具有相對薄腹板的梁，為15或更多。 \n This is shown in an excellent example by Byars and Snyder (see Ref. [2]), a cantilever beam as shown in Fig. 3.3. Determine the principal normal and shear stresses at Point A just below the flange. Assume elastic behavior and neglect any stress concentration at the wall. \n 懸臂梁Byars和Snyder（參見參考文獻[2]）就是一個很好的例子。光束如圖3.3所示。 確定主要法向應力和剪應力法蘭下方的A點。 承擔彈性行為，忽略任何壓力集中在牆上。 \n \n (Mohr’s Circle is used to find the total stress when bending stress and shear stress are considered in the problem) Note, however, that in such a short member as this with its thin-web cross section (span/depth ratio = 24/15 = 1.7), the validity of the flexure formula is questionable. Notice, for example, that the shear and normal stresses are of the same order of magnitude. Also, note that the length of this beam would have to be on the order of 19 feet, for the correct span/depth ratio to apply. \n （Mohr's Circle用於計算彎曲應力和剪切應力時的總應力注意），但是，在這樣的短成員中薄網橫截面（跨度/深度比= 24/15 = 1.7），撓曲公式值得懷疑。 注意，例如，剪力和法線應力大小相同。 另外，請注意該光束的長度要應用正確的跨度/深度比，必須在19英尺的數量級上。 \n The importance of the above example is the emphasis on the effect of transverse shear stresses on maximum stress. In determining maximum stresses in beams, don’t be satisfied with your results until you have exhausted all possible combina- tions of flexure and shear stresses which could give the maximum principal stresses. Often, the construction of the shear and moment diagrams and a comparison of the orders of magnitude of the flexure stresses and transverse shear stresses will greatly simplify the problems. \n 上面例子的重要性是強調橫向最大應力下的剪應力。 在確定樑的最大應力時，在用盡所有可能的組合之前，請不要對您的結果感到滿意-彎曲應力和剪切應力可以提供最大的主應力。通常，剪力圖和彎矩圖的構造以及它們的比較彎曲應力和橫向剪切應力的數量級將大大增加簡化問題。 \n Using some of the beam stress formulae from the example above, we will con-tinue with the “main thrust” of a problem that an electronic enclosure designer may face. That is determining the (maximum) fastener distance (“C”) for a “cover plate”onto a housing chassis. This type of problem involves an environmental seal alongthe housing that will provide (see Ref. 6) \n 使用上面示例中的一些梁應力公式，我們將電子外殼設計人員可能會遇到的問題的“主旨”面對。 那就是確定“蓋板”的（最大）緊固件距離（“ C”）到機箱上。 這種類型的問題涉及環境密封提供的外殼（請參閱參考資料6） \n • Protection from dust, moisture, and vapors •防止灰塵，濕氣和蒸氣 \n • Adequate EMI shielding •足夠的EMI屏蔽 \n We’ll take up the shielding portion of the problem in Chap. 9. Right now, we’ll tackle the “structural problem” of designing the basic seal design geometry in regard to maintaining adequate strength to provide a moisture seal. I’ll be quoting some material from the Tecknit EMI Shielding Products Manual (see Ref. [3]). Note here that I am using some reference material from a “manual.” This remains, even in the “Google Search” age, a very valuable source of information for designers. Many of these manuals are hardbound and were available from original equipment manufacturers for designing in their particular components. Now, a lot of this “design guide” information is available online (as opposed to being available in a hardbound manual). Usually, sales personnel of the component manufacturer are aware of the various “guides” and online information available to designers today. 我們將在第一章中討論問題的屏蔽部分。 9.現在，我們將解決設計中基本密封設計幾何的“結構性問題”關於保持足夠的強度以提供防潮密封性。 我會引用Tecknit EMI屏蔽產品手冊中的某些材料（請參見參考文獻[3]）。 注意在這裡，我使用的是“手冊”中的一些參考資料。 即使如此，在“ Google搜索”時代，對於設計師來說，這是非常有價值的信息來源。這些手冊中有許多是精裝本，可從原始設備獲得製造商設計其特定的組件。 現在，很多“設計指南”信息可在線獲得（相對於精裝手冊）。 通常，零件製造商的銷售人員是了解當今設計師可用的各種“指南”和在線信息。 \n Now, returning to the structural considerations of this enviromental seal problem: 現在，回到這種環境密封的結構考慮問題： \n A. Material of seal: covered later in Chap. 7, “Product Environments (Sealing)” A.封印材料：稍後在第1章中介紹。 7，“產品環境（密封）” \n B. Cover and chassis material: modulus of elasticity covered here (corrosion cov-ered later in Chap. 4, “Materials and Processes.” Surface finishes are covered in B.機蓋和底盤材料：此處覆蓋的彈性模量（腐蝕係數後來在Chap 4，“材料和過程”。 表面處理覆蓋 \n Chap. 7, “Product Environments (Sealing)” 3.4.1懸臂梁分析（摘自Tecknit EMI屏蔽產品手冊） \n C. Cross-sectional area (moment of inertia needed), covered here C.截面積（需要慣性矩），此處覆蓋 \n D. Bolt spacing, covered here D.螺栓間距，此處涵蓋 \n E. Compression stop, covered here E.壓縮停止，在此介紹 \n The “fastener distance” problem is solved (approximately) here in the Tecknit manual by the use of an equation (where C is the spacing between bolts). \n 在Tecknit中（大約）解決了“緊固件距離”問題使用方程式（其中C是螺栓之間的間距）進行手動操作。 \n With the three assumptions of: 基於以下三個假設： \n 1. Gasket width = cover plate width. 1.墊圈寬度=蓋板寬度。 \n 2. Maximum pressure (exerted by gasket) equals three times the minimum pressure (exerted by gasket). 2.最大壓力（由墊圈施加）等於最小壓力的三倍（由墊圈施加）。 \n 3. Minimum pressure is 20 psi. Comparing an enclosure made of aluminum (vs. made of steel): 3.最小壓力為20 psi。比較鋁製外殼（與鋼製外殼）： \n For aluminum plate (E = 1 × 107psi). \n For ΔH = 0.01 inch, a reasonable gasket deflection, and t = 0.125 inch, C = 4.0 inch 對於鋁板（E = 1×107psi）。 對於ΔH= 0.01英寸，一個合理的墊片撓度，而t = 0.125英寸， C = 4.0英寸 \n For steel plate (E = 3 × 107psi). \n For ΔH = 0.01 inch, a reasonable gasket deflection, and t = 0.125 inch, C = 5.2 inch. 對於鋼板（E = 3×107psi）。 \n 對於ΔH= 0.01英寸，一個合理的墊片撓度，而t = 0.125英寸， C = 5.2英寸。 \n A few further observations about the equations (and answers) are: 關於方程式（和答案）的其他一些觀察結果是： \n 1. We see that the bolt spacing for a steel enclosure is more than an aluminum enclosure – this makes sense that the stiffer material would allow less flexure. A bolt is needed every 4 inches for an aluminum plate, while if we use steel for the plate material, a bolt will be needed every 5.2 inch. \n 1.我們看到鋼製外殼的螺栓間距大於鋁製外殼的螺栓間距外殼–較硬的材料允許較少的撓曲是有道理的。 一種鋁板每4英寸需要一個螺栓，而如果我們使用鋼製板材，則每5.2英寸需要一個螺栓。 \n 2. We see that the bolt spacing varies as the cube of the thickness – we would expect that the equation (for bolt spacing) is probably based on the moment of inertia of the “beam,” with resulting “cube function” for thickness. \n 2.我們看到螺栓間距隨著厚度的立方而變化–我們將期望方程式（用於螺栓間距）可能基於“光束”的慣性，以及厚度的“立方體函數”。 \n 3. We would expect the bolt spacing to be a function of a “power to the 1⁄4” as the general equation for a beam with a uniform load along its length to have deflection as a function of its length to the fourth power (see Ref. [2]). That same general equation for a beam with a uniform load would also have deflection as a function of its material modulus of elasticity (E) to the 1⁄4 power (3 1⁄4 = 1.3, which = 78.5/60). \n 3.我們希望螺栓間距是“ 1⁄4的力量”的函數，因為沿其長度具有均佈載荷的梁具有撓度的一般公式作為其長度到四次方的函數（請參見參考文獻[2]）。 那位將軍荷載相等的樑的方程也將具有撓度作為函數的材料彈性模量（E）達到1⁄4的冪（3 1⁄4 = 1.3，= 78.5 / 60）。 \n Thus, as a designer, we would start with an estimation of bolt spacing at 4.0 inch (for an aluminum housing design). Obviously, we could (and should) prototype this spacing in our design and test under as real conditions as possible. Of note is that we have also made assumptions of cross-sectional area of our gasket seal areas and gasket changes in thickness as the gasket goes from: \n 因此，作為設計師，我們首先要估算4.0英寸的螺栓間距（用於鋁製外殼設計）。 顯然，我們可以（並且應該）對此進行原型化盡可能在真實條件下設計和測試時保持間距。 值得注意的是，我們還假設了我們的墊片密封面積的橫截面積，並且墊片厚度隨墊片的變化而變化： \n A. Uncompressed state (before fasteners are tightened). A.未壓縮狀態（在擰緊緊固件之前）。 \n B. Compressed state (after fasteners are tightened down to set “stops” in the design, that is, design features near the fasteners that specifically limit the gasket from 3 Structural Considerations being over-compressed. All gaskets require these “stops” to allow the fasteners to have a specified compression limit. \n B.壓縮狀態（將緊固件擰緊以設置設計中的“止動件”後，也就是說，緊固件附近的設計特徵會特別限制墊圈3結構考量被過度壓縮。 所有墊圈都需要這些“止動件”以允許緊固件具有指定的壓縮限制。 \n We could also look at similar designs where the level of ingress protection (air or water) matches what we design. If we see that 4.0 inches works for these designs, that would give us some confidence that we have certainly a chance at success. \n 我們還可以研究類似的設計，其中防護等級（空氣或水）符合我們的設計。 如果我們發現4.0英寸適用於這些設計，這將使我們充滿信心，我們當然有成功的機會。 \n It should also be noted that one of the factors of the overall design would be to have a minimum amount of fasteners. Thus, a 5.0 inch distance between fasteners would be better than a 4.0 inch distance (with resulting savings of fasteners and the labor to tighten those fasteners). However, the 4.0 inch spacing will increase the likelihood of the gasket design sealing under additional loads that were not a part of the calculation (like shock or thermal) and thus provide the design some margin of safety. 還應注意，整體設計的因素之一是最少使用緊固件。 因此，緊固件之間的距離為5.0英寸會比4.0英寸的距離更好（這樣可以節省緊固件和努力擰緊那些緊固件）。 但是，4.0英寸的間距會增加在不屬於附加載荷的情況下，墊圈設計密封的可能性計算（例如衝擊或熱），從而為設計提供一定的餘量安全。 \n 3.4.2 Deflection Formulae and Maximum Deflection (from Injection Molding Magazine) \n 3.4.2撓度公式和最大撓度注塑雜誌） \n Another problem that illustrates the relationship between stress, deflection, moment of inertia, and area is shown by a method to allow the designer to determine the stress and deflection ratios of a ribbed plate compared to an unribbed plate of the same base thickness, W (Fig. 3.4). This problem will point out the importance (and ease!) of adding a rib to the design. This rib will greatly increase the strength of a section. Ribs, such as this, are easy to add in the injection molding process, casting process, or even in standard sheet metal design. Fig. 3.4 shows two charts. For the chart marked “stress ratio (ribbed/unribbed)”, the ordinate is the stress ratio and the abcissa is the rib height/base thickness. This chart shows how the maximum flexural stress changes as ribs are added to a flat plate. Each curve represents a particular rib spacing ratio, with the curve labeled “.01” representing very widely spaced ribs while other curves have more densely spaced ribs. The chart marked ‘deflection ratio’ is similar and shows a curve labeled “.01” representing very widely spaced ribs. More detail is available in Ref. [4]. \n 另一個問題說明了應力，撓度，力矩之間的關係 慣性，並通過一種方法顯示面積，以允許設計人員確定 肋板與無肋板相比的應力和撓度比相同的基礎厚度W（圖3.4）。這個問題將指出重要性（和輕鬆！）為設計添加肋骨。肋骨將大大增加部分。這樣的肋骨很容易在註塑成型，鑄造中添加工藝，甚至是標準鈑金設計。圖3.4顯示了兩個圖表。為了標有“應力比（肋骨/未肋骨）”的圖表，縱坐標為應力比，abcissa是肋骨高度/基礎厚度。該圖顯示了最大撓度肋板添加到平板時，應力會發生變化。每條曲線代表一個特定的肋骨間距比，曲線標記為“ .01”表示間距很寬的肋骨而其他曲線具有更密集的肋骨間距。標記為“撓度”的圖表比率”相似，並顯示標記為“ .01”的曲線，代表間距很大肋骨。參考中提供了更多詳細信息。 [4]。 \n \n Procedure \n 1. Calculate the equivalent base width, Beq = B/N, where Beq = Equivalent base width B = Total width of plate N = Total number of ribs \n 程序 1.計算等效基礎寬度，Beq = B / N，其中 Beq =等效基準寬度 B =板的總寬度 N =肋骨總數 2. Calculate the rib tip thickness, t = T − 2H (tan a), where t = thickness of rib at the tip T = thickness of rib at the base H = height of rib a = draft angle per side of the rib 2.計算肋骨尖端厚度，t = T-2H（tan a），其中 t =尖端的肋骨厚度 T =底部肋骨的厚度 H =肋骨高度 a =肋骨每側的拔模角 3. Calculate the cross-sectional area of the equivalent base section, Ar = BeqW + H ((T + t)/2) where: Ar = − Cross sectional area of equivalent base section \n W = Thickness of base 3.計算等效基礎截面的截面積，Ar = BeqW + H（（T + t）/ 2）其中： Ar = −等效基礎截面的截面積 \n W =基部厚度 \n So, we know that adding ribs to “unribbed” structure will increase that structure’s ability to handle more loading. Generally, strength can be increased by adding thickness to the “general” wall thickness as: \n 因此，我們知道在“無肋”結構上添加肋骨會增加該結構的處理更多負載的能力。 通常，強度可以通過添加“常規”壁厚的厚度為： \n σ = Mc / I \n where: σ = the stress that the member under consideration \n M = the maximum moment in that member (usually a function of force times “dis-tance,” that is the “distance” from the force to the section of the member) \n I/c = Z, which is a property of the section under consideration, also known as the section modulus c = distance from neutral axis of member to “outside fiber” I = moment of inertia (about the centroid) of the member Thus, to increase the amount of load-bearing ability of a member, you could: Increase I and/or decrease c (increasing Z). The I for a rectangle (a rectangle being a common choice for a fabricated member), \n 哪裡： σ=考慮中的成員的應力 \n M =該成員的最大力矩（通常是力乘以“ dis-距離”，即從力到構件截面的“距離”） \n I / c = Z，這是所考慮部分的屬性，也稱為截面模量 c =從構件的中性軸到“外部光纖”的距離 I =成員的轉動慣量（大約重心） 因此，要增加成員的承載能力，您可以： 增加I和/或減少c（增加Z）。 矩形的I（矩形是人造的常見選擇會員）， \n Thus, 從而， \n where b = the length of the rectangle’s base and h is the thickness of the rectangle. 其中b =矩形底部的長度，h是矩形的厚度。 \n Note that increasing the thickness (h) has a large affect due to the “squaring function.” \n 請注意，由於“平方”，增加厚度（h）有很大影響功能。” \n Thus, doubling the thickness essentially makes the beam stronger by four times. The above being said, doubling the thickness will increase the weight of a member (of a “standard” cross section) by two. This can be a “disaster” for weight-sensitive designs (which are most prevalent in the electronic enclosure industry). \n 因此，將厚度加倍實際上使光束強度提高了四倍。上面說過，將厚度增加一倍會增加重量成員（“標準”橫截面）乘以2。 這可能是“災難”重量敏感型設計（在電子外殼中最普遍行業）。 \n However, by adding ribs, which are “intermittent” additions of thickness, the strength goes up considerably (while the weight goes up by only a small amount). The designer may be surprised to see that adding ribs may actually increase the maximum stress. Why is this? Although a rib increases the overall moment of iner- tia of the plate, the distance from the neutral axis to the extreme fiber of the cross section (c) can increase more rapidly for short ribs. This effect is most pronounced for widely spaced ribs. \n 但是，通過添加肋骨（這些肋骨是厚度的“間歇性”增加），強度顯著提高（重量僅少量增加）。設計師可能會驚訝地發現添加肋骨實際上會增加最大壓力。 為什麼是這樣？ 儘管肋骨增加了整體平板的tia，從中性軸到十字的極端纖維的距離對於短肋骨，（c）節可以更快地增加。 這種效果最明顯適用於間距較大的肋骨。 \n Let’s go back to the seven steps in calculating Sratio (ratio of maximum allow- able stress for both an unribbed and single-ribbed design) for a very simple rib addi- tion where the “rib” is not tapered, that is, T = t: \n 讓我們回到計算Sratio（最大允許值的比率，肋骨和單肋骨設計都能承受足夠的壓力），非常簡單的肋骨附加“肋”不是錐形的，即T = t： \n Width of the plate (B) = 1 inch Single rib, height of rib (H) = 0.375 Thickness of base (W) = 0.125 inch Wr = 0.0.125/1.00 = 0.125 rib height/base thickness = 0.375/0.125 = 3.0 板的寬度（B）= 1英寸 單肋骨，肋骨高度（H）= 0.375 底座厚度（W）= 0.125英寸 Wr = 0.0.125 / 1.00 = 0.125肋骨高度/基礎厚度= 0.375 / 0.125 = 3.0 \n Thus, the addition of the rib to the design makes the section approximately three times stronger. 因此，在設計中增加了肋，使截面大約為三倍強。 \n The Injection Molding Magazine (Ref. 7) article also compares the deflection ratio for a ribbed/unribbed section. 注塑雜誌（參考文獻7）文章還比較了撓度有肋/無肋部分的比率。 \n 3.4.3 Another Deflection Problem, This Time Snap-Fitting Hook (from Mobay Design Manual, Snap-Fit Joints in Plastics) 3.4.3另一個變形問題，這次是貼合掛鉤（來自Mobay設計手冊，快裝接頭 在塑料中） \n This problem is a great example of what an enclosure designer faces when design- ing a commonly used feature, the “snap-fit.” Snap joints are a very simple, economi-cal, and rapid way of joining two different components. As this eliminates fasteners from joining the two components, it is used quite frequently. The design utilizes a protruding feature from one of the parts (the “hook”), while the other part contains hole (or “undercut”). The idea here is that the hook is deflected briefly during the joining operation and catches in the undercut to complete the mating operation. \n 這個問題是機箱設計師在設計時面臨的一個很好的例子- 常用功能“貼合”。 卡扣接頭非常簡單，經濟連接兩個不同組件的快速，快速的方式。 因為這消除了緊固件從連接這兩個組件開始，它經常被使用。 該設計利用了從其中一個零件（“掛鉤”）突出的特徵，而另一零件則包含孔（或“咬邊”）。 這裡的想法是，鉤在安裝過程中會短暫偏轉連接操作，並咬入底切以完成配合操作。 \n This introductory problem has been chosen as it: 選擇此介紹性問題是因為： \n A. Shows a common fastening methodology (for plastics). A.顯示一種通用的緊固方法（用於塑料）。 \n B. Shows the use of common strength of materials formulae being used in a man- ner that utilizes the elastic nature of material, deflection being used as an advan- tage in a design, and optimization of cross-sectional area and uniform strain. \n B.顯示了在人類中使用的材料配方的共同強度利用了材料的彈性的彎曲劑設計中的最佳使用時間，並優化了橫截面積和均勻應變。 \n C. Introduces some of the aspects of designing with plastic materials. C.介紹了使用塑料材料進行設計的某些方面。 \n D. Utilizes available literature from suppliers (in this case, Mobay Plastics). Instead of solving some of the more complex (yet, common) problems by first princi- ples, the use of tabulated options and nomograms can greatly reduce the design time needed. D.利用供應商提供的文獻資料（在本例中為Mobay Plastics）。 代替首先通過原理解決一些更複雜（迄今常見）的問題ples，使用列表選項和列線圖可以大大減少設計需要的時間。 \n This calculation example is for a snap-fitting hook of rectangular cross section and with a constant decrease in thickness from h at the root to h/2 at the end of the hook (see Fig. 3.5). This is therefore design type 2 (see Table in Reference). General design goal is to permit maximum deformation with minimum material. \n 此計算示例適用於矩形橫截面的卡扣鉤且厚度從根部的h不斷減小到末端的h / 2掛鉤（見圖3.5）。 因此，這是設計類型2（請參見參考表）。 一般設計目標是用最少的材料實現最大的變形。 \n \n Length (l) = 0.75 inch Width (b) = 0.37 inch Undercut (y) = 0.094 inch Angle of inclination (α) = 30° 長度（l）= 0.75英寸 寬度（b）= 0.37英寸 底切（y）= 0.094英寸 傾斜角（α）= 30° \n Find: Thickness (h) at which full deflection (y) will cause a strain of 1⁄2 the permissible strain. From table (for polycarbonate), ε (permissible) = 4%; therefore, ε (allowable) =2%. 找： 厚度（h），在最大厚度處（y）會導致允許的1⁄2應變 應變。 從表中（對於聚碳酸酯），ε（允許）= 4％； 因此，ε（允許） = 2％。 \n 3.5 Dynamic Loads 3.5動態負載 \n Dynamic loads on members in electronic enclosures are due to loads that bear on the member in a nonsteady-state manner. They include, but are not limited to: 電子機櫃中成員的動態載荷是由於承受的載荷該成員以非穩態方式。 它們包括但不限於： \n A. Vibratory loads that have amplitude and frequency (includes wind forces or inertia forces associated with earthquake ground motion) A.具有振幅和頻率的振動負載（包括風力或與地震地面運動有關的慣性力） \n B. Discrete shock loads B.離散衝擊載荷 \n Some problems considering these vibration and shock-loading situations will be explored in Chap. 7 on “Product Environments.” 考慮到這些振動和衝擊載荷情況，一些問題將是在Chap中進行了探索。 關於“產品環境”的第7條。 \n Chapter Summary 章節總結 \n In this chapter, I’ve introduced the EPE Designer to some of the basic consider- ations of the structural considerations of the enclosure. We can start this design by proposing materials for these outer hulls. Also our design disposal will be the choice of the cross section of the hull. The best choice for these cross sections and materi-als are made by using strength of material equations which are readily available. \n However, there are choices to be made among various solutions, and it will takemore considerations than just structure alone to determine the best design. \n 在本章中，我向EPE設計器介紹了一些基本考慮因素-外殼的結構注意事項。 我們可以通過以下方式開始設計為這些外部船體提供材料。 同樣，我們的設計處置將是您的選擇船體的橫截面。 這些橫截面和材料的最佳選擇通過使用容易獲得的材料方程式的強度來製造。 \n 但是，在各種解決方案中都有選擇，這將需要不僅要確定最佳設計，還需要考慮更多的因素。 \n Also, we have introduced a generic process for designing the structure for the electronic enclosure. This starts with looking at previous designs, determining the forces on the structure, and continues on to determining the factor of safety in our design. \n 此外，我們還介紹了一種通用流程，用於設計電子外殼。 首先，請查看先前的設計，確定力作用在結構上，並繼續確定我們安全的因素設計。 \n From there, we looked at some examples that illustrate common problems in designing the structure. We finished with a short section on additional complica-tions and considerations to be noted which serves as an introduction to Chap. 4. \n 從那裡，我們看了一些例子，這些例子說明了設計結構。 我們在簡短的結尾部分介紹了其他復雜內容-需要注意的注意事項和注意事項，這是對Chap的介紹。 4。 \n References 參考文獻 \n Again, this chapter has been a review of structural considerations as they relate to structures encountered in the design of electronic enclosures. The reader may have many other sources of information, but the main ones I have used (over the years) are: \n 同樣，本章回顧了與結構性考慮相關的因素電子外殼設計中遇到的結構。 讀者可能有 其他許多信息來源，但我使用的主要來源（多年來）是： \n 1. Roark RJ, Young WC (1975) Formulas for stress and strain. McGraw-Hill Book Co., New York 1. Roark RJ，Young WC（1975）應力和應變公式。 紐約麥格勞-希爾圖書有限公司 \n 2. Byars EF, Snyder RD (1969) Engineering mechanics of deformable bodies. International Textbook Co., Scranton 2. Byars EF，Snyder RD（1969）可變形體的工程力學。 國際化斯克蘭頓教科書公司 \n 3. Design guide to the selection and application of EMI shielding materials. TECKNIT, EMI Shielding Products (1991) 3.有關EMI屏蔽材料的選擇和應用的設計指南。 TECKNIT，EMI屏蔽產品（1991） \n 4. Injection Molding magazine, May 1998 issue, R. Cramer of Dow Materials Engineering Center 4.注塑雜誌，1998年5月，陶氏材料工程中心的R. Cramer", 'tags': '', 'url': '翻譯.html'}]};