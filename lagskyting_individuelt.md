---
title: Lagskyting individuelt
---

<script src="assets/js/search.js"></script> 

<table id="search_tbl">
  <input type="text" id="search_input" onkeyup="searchTable()" placeholder="Søk...">
  <tr>
    <th>År</th>
    <th>Skytter</th>
    <th>Lag</th>
    <th class="mobile_hide">5s</th>
    <th class="mobile_hide">5s</th>
    <th class="mobile_hide">5s</th>
    <th>15s</th>
    <th>Grl</th>
    <th class="mobile_hide">25s</th>
    <th>Omg</th>
    <th>Sum</th>
    <th>Anvis</th>
  </tr>
{%- for row in site.data.lagskyting_individuelt %}
  <tr class="search_row">
    <td>{{ row["år"] }}</td>
  {%- if row["år"] != forrige_aar %}
    {%- assign forrige_aar = row["år"] %}
    {%- assign index = 1 %}
  {%- endif -%}
  {%- assign name_found = site.data.navneliste | where: "navn", row["skytter"] | size %}
  {%- if name_found == 0 %}
    <td class="data_issue">{{ index }}. {{ row["skytter"] }} <br> *) Ikke funnet i navneliste</td>
  {%- else %}
    <td>{{ index }}. {{ row["skytter"] }}</td>
  {%- endif %}
    <td>{{ row["skytterlag"] }}</td>
  {%- assign 15_skudd_serie_sum = row["1_serie"] | plus: row["2_serie"] | plus: row["3_serie"] %}
  {%- assign 15_skudd_sum = row["15_skudd"] | plus: 0 %}
  {%- if 15_skudd_serie_sum > 0 and 15_skudd_sum > 0 and 15_skudd_serie_sum != 15_skudd_sum %}
    <td class="mobile_hide data_issue">*{{ row["1_serie"] }}</td>
    <td class="mobile_hide data_issue">*{{ row["2_serie"] }}</td>
    <td class="mobile_hide data_issue">*{{ row["3_serie"] }}</td>
    <td class="data_issue">*{{ row["15_skudd"] }}</td>
  {%- else %}
    <td class="mobile_hide">{{ row["1_serie"] }}</td>
    <td class="mobile_hide">{{ row["2_serie"] }}</td>
    <td class="mobile_hide">{{ row["3_serie"] }}</td>
    <td>{{ row["15_skudd"] }}</td>
  {%- endif -%}
  {%- assign 25_skudd_serie_sum = row["15_skudd"] | plus: row["4_serie"] %}
  {%- assign 25_skudd_sum = row["25_skudd"] | plus: 0 %}
  {%- if 25_skudd_serie_sum > 0 and 25_skudd_sum > 0 and 25_skudd_serie_sum != 25_skudd_sum %}
    <td class="data_issue">*{{ row["4_serie"] }}</td>
    <td class="mobile_hide data_issue">*{{ row["25_skudd"] }}</td>
  {%- else %}
    <td>{{ row["4_serie"] }}</td>
    <td class="mobile_hide">{{ row["25_skudd"] }}</td>
  {%- endif -%}
  {%- assign 35_skudd_serie_sum = row["25_skudd"] | plus: row["5_serie"] %}
  {%- assign 35_skudd_sum = row["35_skudd"] | plus: 0 %}
  {%- if 35_skudd_serie_sum > 0 and 35_skudd_sum > 0 and 35_skudd_serie_sum != 35_skudd_sum %}
    <td class="data_issue">*{{ row["5_serie"] }}</td>
    <td class="data_issue">*{{ row["35_skudd"] }}</td>
  {%- else %}
    <td>{{ row["5_serie"] }}</td>
    <td>{{ row["35_skudd"] }}</td>
  {%- endif -%}
  {%- assign image_filename = row["anvisning"] %}
  {%- if image_filename and image_filename != "" and image_filename != nil %}
    <td><a href='assets/images/gravkort/lagskyting/{{ row["år"] }}/{{ image_filename }}'>Skive</a></td>
  {%- else %}
    <td></td>
  {%- endif %}
  </tr>
  {%- assign index = index | plus: 1 %}
{%- endfor %}
  <caption id="search_caption"></caption>
</table>
