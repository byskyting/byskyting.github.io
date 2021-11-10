---
title: Lagskyting sammenlagt
---

<script src="assets/js/search.js"></script> 

<table id="search_tbl" style="border: 0;">
  <input type="text" id="search_input" onkeyup="searchTable()" placeholder="Søk...">
{%- for row in site.data.lagskyting_sammenlagt %}
  {%- assign aar = row["år"] | plus: 0 %}
  {%- if aar != forrige_aar %}
    {%- assign forrige_aar = aar %}
    {%- assign index = 1 %}
    {%- assign arrangorlag = site.data.arrangement | where: "år", row["år"] | map: "arrangørlag" | first %}
    {%- if forloop.first == false %}
        </tr>
      </table>
    </td>
  </tr>
    {%- endif %}
  <tr class="search_row">
    <td style="border: 0; padding-left: 0; padding-right: 0;">
      <table>
        <tr>
          <td colspan="3" style="font-weight: bold; text-align: center;">{{ row["år"] }} (arr. {{ arrangorlag | slice: 0 }})</td>
        </tr>
        <tr>
  {%- endif %}
          <td style="vertical-align: top; width: 33.33%;">
            <table style="border: 0;">
              <tr>
                <td style="border: 0; font-weight: bold;">{{ index }}. {{ row["skytterlag"] }}</td>
                <td style="border: 0; font-weight: bold; text-align: right;">{{ row["sum"] }}</td>
              </tr>
  {%- if aar < 1932 %}
    {%- assign antall_fullt_lag = 6 %}
  {%- elsif aar >= 1932 and aar <= 1934 %}
    {%- assign antall_fullt_lag = 5 %}
  {%- elsif aar >= 1935 and aar <= 1981 %}
    {%- assign antall_fullt_lag = 10 %}
  {%- elsif aar >= 1982 %}
    {%- assign antall_fullt_lag = 8 %}
  {%- endif %}
  {%- assign skytter_nr = 0 %}
  {%- assign antall_tellende_res = 0 %}
  {%- assign sum_alle_tellende_res = 0 %}
  {%- assign lagskyting_individuelt = site.data.lagskyting_individuelt | where: "skytterlag", row["skytterlag"] | where: "år", row["år"] %}
  {%- for ind_res in lagskyting_individuelt %}
    {%- assign kort_navn = "" %}
    {%- assign navn_i_deler = ind_res["skytter"] | split: " " %}
    {%- for del_av_navn in navn_i_deler %}
      {%- if forloop.last == false %}
        {%- assign forste_bokstav = del_av_navn | slice: 0 %}
        {%- assign kort_navn = kort_navn | append: forste_bokstav | append: ". " %}
      {%- else %}
        {%- assign kort_navn = kort_navn | append: del_av_navn %}
      {%- endif %}
    {%- endfor %}
              <tr>
                <td style="border: 0;">{{ kort_navn }}</td>
    {%- assign sum_ind_res = ind_res["35_skudd"] | plus: 0 %}
    {%- assign skytter_nr = skytter_nr | plus: 1 %}
    {%- if sum_ind_res > 0 %}
      {%- if skytter_nr > antall_fullt_lag %}
                <td style="border: 0; text-align: right; text-decoration: line-through; text-decoration-thickness: 1px;">{{ ind_res["35_skudd"] }}</td>
      {%- else %}
                <td style="border: 0; text-align: right;">{{ ind_res["35_skudd"] }}</td>
        {%- assign antall_tellende_res = antall_tellende_res | plus: 1 %}
        {%- assign sum_alle_tellende_res = sum_alle_tellende_res | plus: sum_ind_res %}
      {%- endif %}
    {%- else %}
                <td style="border: 0; text-align: right;">-</td>
    {%- endif %}
              </tr>
  {%- endfor %}
  {%- assign sum_lag = row["sum"] | plus: 0 %}
  {%- if antall_tellende_res < antall_fullt_lag and sum_alle_tellende_res != sum_lag %}
              <tr>
                <td class="data_issue" style="border: 0;" colspan="2">*) Mangler resultater</td>
              </tr>
  {%- elsif sum_alle_tellende_res != sum_lag %}
              <tr>
                <td class="data_issue" style="border: 0;" colspan="2">*) Sum {{ antall_tellende_res }} beste er {{ sum_alle_tellende_res }}</td>
              </tr>
  {%- endif %}
            </table>
          </td>
  {%- assign index = index | plus: 1 %}
{%- endfor %}
  </tr>
  <caption id="search_caption"></caption>
</table>
