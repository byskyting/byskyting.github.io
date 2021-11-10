---
title: Ridderutnevnelse
---

<table>
  <tr>
    <th>År</th>
    <th>Kristiansund</th>
    <th>Molde</th>
    <th>Aalesund</th>
  </tr>
{%- assign ridderutnevnelse = site.data.ridderutnevnelse %}
{%- assign aar_list = ridderutnevnelse | map: "år" | uniq %}
{%- for aar in aar_list %}
  <tr>
    <td>{{ aar }}</td>
    <td>{{ ridderutnevnelse | where: "skytterlag", "Kristiansund" | where: "år", aar | map: "skytter" }}</td>
    <td>{{ ridderutnevnelse | where: "skytterlag", "Molde" | where: "år", aar | map: "skytter" }}</td>
    <td>{{ ridderutnevnelse | where: "skytterlag", "Aalesund" | where: "år", aar | map: "skytter" }}</td>
  </tr>
{%- endfor %}
</table>

## Ridderkandidater
<table>
  <tr>
    <th colspan="2">Kristiansund</th>
    <th colspan="2">Molde</th>
    <th colspan="2">Aalesund</th>
  </tr>
{%- assign lagskyting_individuelt = site.data.lagskyting_individuelt %}
{%- assign skyttere_unique = lagskyting_individuelt | map: "skytter" | uniq %}
{%- assign ridder_list = site.data.ridderutnevnelse | map: "skytter" %}
{%- assign count_array_kristiansund = "" | split: ", " %}
{%- assign count_array_molde = "" | split: ", " %}
{%- assign count_array_aalesund = "" | split: ", " %}
{%- for skytter in skyttere_unique %}
  {%- unless ridder_list contains skytter %}
    {%- assign tmp_count = lagskyting_individuelt | where: "skytter", skytter | size | prepend: '00' | slice: -2, 2 %}
    {%- assign tmp_str = tmp_count | append: ", " | append: skytter %}
    {%- assign tmp_skytterlag = lagskyting_individuelt | where: "skytter", skytter | map: "skytterlag" | first %}
    {%- if tmp_skytterlag == "Kristiansund"  %}
      {% assign count_array_kristiansund = count_array_kristiansund | push: tmp_str %}
    {%- elsif tmp_skytterlag == "Molde" %}
      {% assign count_array_molde = count_array_molde | push: tmp_str %}
    {%- elsif tmp_skytterlag == "Aalesund" %}
      {% assign count_array_aalesund = count_array_aalesund | push: tmp_str %}
    {%- endif %}
  {%- endunless %}
{%- endfor %}
{%- assign count_array_kristiansund = count_array_kristiansund | sort | reverse %}
{%- assign count_array_molde = count_array_molde | sort | reverse %}
{%- assign count_array_aalesund = count_array_aalesund | sort | reverse %}
{%- for i in (0..9) %}
  {%- assign elem_split_kristiansund = count_array_kristiansund[i] | split: ", " %}
  {%- assign elem_split_molde = count_array_molde[i] | split: ", " %}
  {%- assign elem_split_aalesund = count_array_aalesund[i] | split: ", " %}
  <tr>
    <td>{{ elem_split_kristiansund[1] }}</td>
    <td>{{ elem_split_kristiansund[0] | plus: 0 }}</td>
    <td>{{ elem_split_molde[1] }}</td>
    <td>{{ elem_split_molde[0] | plus: 0 }}</td>
    <td>{{ elem_split_aalesund[1] }}</td>
    <td>{{ elem_split_aalesund[0] | plus: 0 }}</td>
  </tr>
{%- endfor %}
  <caption>*) Kun basert på registrerte resultater, så med forbehold om feil og mangler.</caption>
</table>
